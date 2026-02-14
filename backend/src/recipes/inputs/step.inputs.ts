import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutRecipeStepsInput } from '../recipe/recipe-create-nested-one-without-recipe-steps.input';

@InputType()
export class RecipeStepInput {

    @Field(() => Int, {nullable:false})
    oreder!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

}
