import { Injectable, NotFoundException } from '@nestjs/common';
import type { PrismaService } from 'src/prisma/prisma.service';
import type { RecipeCreateInput } from './inputs/recipe.input';

@Injectable()
export class AdminRecipesService {
    constructor(private readonly prisma: PrismaService) { }

    getAll() {
        return this.prisma.recipe.findMany();
    }

    async getById(id: string) {

        const recipe = await this.prisma.recipe.findUnique({
            where: { id },
        });

        if (!recipe) {
            throw new NotFoundException(`Рецепт с ID ${id} не найден`);
        }

        return recipe;
    }

    create(authorId: string, {
        recipeSteps,
        nutritionFact,
        ingredientIds,
        tags,
        ...data }: RecipeCreateInput) {

        return this.prisma.recipe.create({
            data: {
                ...data,
                author: {
                    connect: { id: authorId },
                },
                ...(!!nutritionFact && {
                    nutritionFact: {
                        create: nutritionFact
                    }
                }),
                recipeSteps: {
                    create: recipeSteps
                },
                ...(!!ingredientIds?.length && {
                    recipeIngredients: {
                        create: ingredientIds.map((ingredientId, index) => ({
                            ingredientId,
                            quantity: 1,
                            order: index + 1
                        }))

                    }
                }),
                ...(!!tags?.length && {
                    tags: {
                        connectOrCreate: tags.map(tag => ({
                            where: { name: tag },
                            create: { name: tag }
                        }))

                    }
                }),

            }
        });
    }

    update(
        id: string,
        {
            recipeSteps,
            nutritionFact,
            ingredientIds,
            tags,
            ...data }: RecipeCreateInput) {

        return this.prisma.recipe.update({
            where: { id },
            data: {
                ...data,
                ...(!!nutritionFact && {
                    nutritionFact: {
                        upsert: {
                            create: nutritionFact,
                            update: nutritionFact
                        }
                    }
                }),
                ...(recipeSteps && {
                    recipeSteps: {
                        deleteMany: {},
                        create: recipeSteps.map(step => ({
                            order: step.order,
                            title: step.title,
                            description: step.description
                        }))
                    }
                }),
                ...(ingredientIds && {
                    recipeIngredients: {
                        deleteMany: {},
                        create: ingredientIds.map((ingredientId, index) => ({
                            ingredientId,
                            quantity: 1,
                            order: index + 1
                        }))

                    }
                }),
                ...(tags && {
                    tags: {
                        set: [],
                        connectOrCreate: tags.map(tagName => ({
                            where: { name: tagName },
                            create: { name: tagName }
                        }))

                    }
                }),

            }
        });
    }

    deleteById(id: string) {
        return this.prisma.recipe.delete({
            where: { id },
        });
    }
}
