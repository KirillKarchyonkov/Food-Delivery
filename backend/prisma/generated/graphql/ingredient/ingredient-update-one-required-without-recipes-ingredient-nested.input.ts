import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutRecipesIngredientInput } from './ingredient-create-without-recipes-ingredient.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutRecipesIngredientInput } from './ingredient-create-or-connect-without-recipes-ingredient.input';
import { IngredientUpsertWithoutRecipesIngredientInput } from './ingredient-upsert-without-recipes-ingredient.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateToOneWithWhereWithoutRecipesIngredientInput } from './ingredient-update-to-one-with-where-without-recipes-ingredient.input';

@InputType()
export class IngredientUpdateOneRequiredWithoutRecipesIngredientNestedInput {

    @Field(() => IngredientCreateWithoutRecipesIngredientInput, {nullable:true})
    @Type(() => IngredientCreateWithoutRecipesIngredientInput)
    create?: IngredientCreateWithoutRecipesIngredientInput;

    @Field(() => IngredientCreateOrConnectWithoutRecipesIngredientInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutRecipesIngredientInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutRecipesIngredientInput;

    @Field(() => IngredientUpsertWithoutRecipesIngredientInput, {nullable:true})
    @Type(() => IngredientUpsertWithoutRecipesIngredientInput)
    upsert?: IngredientUpsertWithoutRecipesIngredientInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateToOneWithWhereWithoutRecipesIngredientInput, {nullable:true})
    @Type(() => IngredientUpdateToOneWithWhereWithoutRecipesIngredientInput)
    update?: IngredientUpdateToOneWithWhereWithoutRecipesIngredientInput;
}
