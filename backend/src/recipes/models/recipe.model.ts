import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Difficulty } from '../recipe.enum';
import { NutritionFactModel } from './nutrition-fact.model';
import { RecipeTagModel } from './recipe-tag.model';
import { RecipeIngredientModel } from './recipe-ingredient.model';
import { RecipeStepModel } from './recipe-step.model';
import { UserModel } from 'src/users/models/user.model';


@ObjectType()
export class RecipeModel {

    @Field(() => ID, {nullable:false})
    id!: string;

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

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => UserModel, {nullable:false})
    author?: UserModel;

    @Field(() => NutritionFactModel, {nullable:true})
    nutritionInfos?: NutritionFactModel | null;

    @Field(() => [RecipeTagModel], {nullable:true})
    tags?: Array<RecipeTagModel>;

    @Field(() => [RecipeStepModel], {nullable:true})
    recipeSteps?: Array<RecipeStepModel>;

    @Field(() => [RecipeIngredientModel], {nullable:true})
    recipeIngredients?: Array<RecipeIngredientModel>;

    @Field(() => Int, {nullable:true})
    likes?: number;

    // @Field(() => [Comment], {nullable:true})
    // comments?: Array<Comment>;
}
