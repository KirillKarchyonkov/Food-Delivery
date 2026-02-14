import { registerEnumType } from '@nestjs/graphql';

export enum OrderItemScalarFieldEnum {
    id = "id",
    quantity = "quantity",
    price = "price",
    recipeIngredientId = "recipeIngredientId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OrderItemScalarFieldEnum, { name: 'OrderItemScalarFieldEnum', description: undefined })
