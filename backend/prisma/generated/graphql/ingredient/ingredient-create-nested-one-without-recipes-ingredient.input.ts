import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesIngredientInput } from './ingredient-create-without-recipes-ingredient.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesIngredientInput } from './ingredient-create-or-connect-without-recipes-ingredient.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutRecipesIngredientInput {

    @Field(() => IngredientCreateWithoutRecipesIngredientInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesIngredientInput)
    create?: IngredientCreateWithoutRecipesIngredientInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesIngredientInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesIngredientInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesIngredientInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
