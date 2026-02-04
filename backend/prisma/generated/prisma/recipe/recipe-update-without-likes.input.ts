import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumDifficultyFieldUpdateOperationsInput } from '../prisma/enum-difficulty-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { UserUpdateOneRequiredWithoutRecipesNestedInput } from '../user/user-update-one-required-without-recipes-nested.input';
import { RecipeIngredientUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-recipe-nested.input';
import { Type } from 'class-transformer';
import { RecipeStepUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-update-many-without-recipe-nested.input';
import { CommentUpdateManyWithoutRecipeNestedInput } from '../comment/comment-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUpdateWithoutLikesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    calories?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    cookingTime?: IntFieldUpdateOperationsInput;

    @Field(() => EnumDifficultyFieldUpdateOperationsInput, {nullable:true})
    difficulty?: EnumDifficultyFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    author?: UserUpdateOneRequiredWithoutRecipesNestedInput;

    @Field(() => RecipeIngredientUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithoutRecipeNestedInput)
    recipeIngredients?: RecipeIngredientUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeStepUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUpdateManyWithoutRecipeNestedInput;
}
