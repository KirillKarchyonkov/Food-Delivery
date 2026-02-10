import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesIngredientInput } from './ingredient-create-without-recipes-ingredient.input';

@InputType()
export class IngredientCreateOrConnectWithoutRecipesIngredientInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutRecipesIngredientInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesIngredientInput)
    create!: IngredientCreateWithoutRecipesIngredientInput;
}
