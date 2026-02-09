import { registerEnumType } from '@nestjs/graphql';

export enum OrderItemScalarFieldEnum {
    id = "id",
    quantity = "quantity",
    recipeIngredientId = "recipeIngredientId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })
