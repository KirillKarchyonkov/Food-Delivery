import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientModel } from 'src/recipes/models/recipe-ingredient.model';

@ObjectType()
export class OrderItemModel {

    @Field(() => ID)
    id!: string;

    @Field(() => Int, {defaultValue:1,nullable:true})
    quantity!: number | null;

    @Field(() => String)
    price!: string;

    @Field(() => String)
    recipeIngredientId!: string;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    updatedAt!: Date;

    @Field(() => RecipeIngredientModel)
    recipeIngredient!: RecipeIngredientModel;
}
