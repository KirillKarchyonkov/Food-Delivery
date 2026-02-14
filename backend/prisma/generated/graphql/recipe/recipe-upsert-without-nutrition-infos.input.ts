import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutNutritionInfosInput } from './recipe-update-without-nutrition-infos.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionInfosInput } from './recipe-create-without-nutrition-infos.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutNutritionInfosInput {

    @Field(() => RecipeUpdateWithoutNutritionInfosInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutNutritionInfosInput)
    update!: RecipeUpdateWithoutNutritionInfosInput;

    @Field(() => RecipeCreateWithoutNutritionInfosInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionInfosInput)
    create!: RecipeCreateWithoutNutritionInfosInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
