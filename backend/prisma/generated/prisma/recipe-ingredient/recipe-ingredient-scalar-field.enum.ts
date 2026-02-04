import { registerEnumType } from '@nestjs/graphql';

export enum RecipeIngredientScalarFieldEnum {
    id = "id",
    name = "name",
    iconUrl = "iconUrl",
    content = "content",
    quantity = "quantity",
    unit = "unit",
    price = "price",
    recipeId = "recipeId",
    ingredientId = "ingredientId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeIngredientScalarFieldEnum, { name: 'RecipeIngredientScalarFieldEnum', description: undefined })
