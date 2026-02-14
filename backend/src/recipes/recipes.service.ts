import { Injectable, NotFoundException } from '@nestjs/common';
import type { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
    constructor(private readonly prisma: PrismaService) { }
    
        getAll() {
            return this.prisma.recipe.findMany();
        }
    
        async getBySlug(slug: string) {
    
            const recipe = await this.prisma.recipe.findUnique({
                where: { 
                    slug 
                    },
                    include: {
                        recipeSteps: true,
                        recipeIngredients: {
                            include: {
                                ingredient: true,
                            }
                        }
                    }
            });
    
            if (!recipe) {
                throw new NotFoundException(`Рецепт с SLUG ${slug} не найден`);
            }
    
            return recipe;
        }

        
}
