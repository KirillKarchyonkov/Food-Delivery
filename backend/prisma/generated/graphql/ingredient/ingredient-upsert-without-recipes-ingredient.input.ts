import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutRecipesIngredientInput } from './ingredient-update-without-recipes-ingredient.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutRecipesIngredientInput } from './ingredient-create-without-recipes-ingredient.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutRecipesIngredientInput {

    @Field(() => IngredientUpdateWithoutRecipesIngredientInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesIngredientInput)
    update!: IngredientUpdateWithoutRecipesIngredientInput;

    @Field(() => IngredientCreateWithoutRecipesIngredientInput, {nullable:false})
    @Type(() => IngredientCreateWithoutRecipesIngredientInput)
    create!: IngredientCreateWithoutRecipesIngredientInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
