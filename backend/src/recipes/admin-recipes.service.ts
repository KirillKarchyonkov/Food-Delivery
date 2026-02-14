import { Injectable, NotFoundException } from '@nestjs/common';
import type { PrismaService } from 'src/prisma/prisma.service';


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
    
        create(data: IngredientCreateInput) {
            return this.prisma.recipe.create({
                data,
            });
        }
    
        update(id: string, data: IngredientCreateInput) {
            return this.prisma.recipe.update({
                where: { id },
                data,
            });
        }
    
        deleteById(id: string) {
            return this.prisma.recipe.delete({
                where: { id },
            });
        }
}
