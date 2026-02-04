import { registerEnumType } from '@nestjs/graphql';

export enum RecipeStepScalarFieldEnum {
    id = "id",
    oreder = "oreder",
    title = "title",
    description = "description",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeStepScalarFieldEnum, { name: 'RecipeStepScalarFieldEnum', description: undefined })
