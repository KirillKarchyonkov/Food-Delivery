import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutNutritionInfosInput } from './recipe-update-without-nutrition-infos.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutNutritionInfosInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutNutritionInfosInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionInfosInput)
    data!: RecipeUpdateWithoutNutritionInfosInput;
}
