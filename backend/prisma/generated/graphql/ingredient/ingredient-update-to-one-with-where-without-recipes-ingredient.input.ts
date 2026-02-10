import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutRecipesIngredientInput } from './ingredient-update-without-recipes-ingredient.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutRecipesIngredientInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutRecipesIngredientInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutRecipesIngredientInput)
    data!: IngredientUpdateWithoutRecipesIngredientInput;
}
