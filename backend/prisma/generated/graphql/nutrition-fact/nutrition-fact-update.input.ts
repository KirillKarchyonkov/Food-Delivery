import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutNutritionInfosNestedInput } from '../recipe/recipe-update-one-required-without-nutrition-infos-nested.input';

@InputType()
export class NutritionFactUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Float, {nullable:true})
    proteins?: number;

    @Field(() => Float, {nullable:true})
    fats?: number;

    @Field(() => Float, {nullable:true})
    carbohydrates?: number;

    @Field(() => Float, {nullable:true})
    fiber?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutNutritionInfosNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutNutritionInfosNestedInput;
}
