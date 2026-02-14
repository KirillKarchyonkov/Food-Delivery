import { Field, registerEnumType } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { NutritionFactUpdateInput } from './nutrition-fact.input';


export enum Difficulty {
    EASY = "EASY",
    MEDIUM = "MEDIUM",
    HARD = "HARD"
}

registerEnumType(Difficulty, { name: 'Difficulty', description: undefined })

@InputType()
export class RecipeCreateInput {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Int, {nullable:false})
    calories!: number;

    @Field(() => Int, {nullable:false})
    cookingTime!: number;

    @Field(() => Difficulty, {nullable:false})
    difficulty!: `${Difficulty}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => NutritionFactUpdateInput, {nullable:true})
    nutritionInfos?: NutritionFactUpdateInput;

    @Field(() => String, {nullable:true})
    tags?: string[];

    @Field(() => RecipeStepCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeSteps?: RecipeStepCreateNestedManyWithoutRecipeInput;

    @Field(() => RecipeIngredientCreateNestedManyWithoutRecipeInput, {nullable:true})
    recipeIngredients?: RecipeIngredientCreateNestedManyWithoutRecipeInput;

    @Field(() => LikeCreateNestedManyWithoutRecipeInput, {nullable:true})
    likes?: LikeCreateNestedManyWithoutRecipeInput;

    @Field(() => CommentCreateNestedManyWithoutRecipeInput, {nullable:true})
    comments?: CommentCreateNestedManyWithoutRecipeInput;
}
