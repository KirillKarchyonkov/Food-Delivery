import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumDifficultyFieldUpdateOperationsInput } from '../prisma/enum-difficulty-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-recipe-nested.input';
import { Type } from 'class-transformer';
import { RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput } from '../recipe-step/recipe-step-unchecked-update-many-without-recipe-nested.input';
import { CommentUncheckedUpdateManyWithoutRecipeNestedInput } from '../comment/comment-unchecked-update-many-without-recipe-nested.input';
import { LikeUncheckedUpdateManyWithoutRecipeNestedInput } from '../like/like-unchecked-update-many-without-recipe-nested.input';

@InputType()
export class RecipeUncheckedUpdateInput {

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

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    authorId?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput)
    recipeIngredients?: RecipeIngredientUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    recipeSteps?: RecipeStepUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => CommentUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    comments?: CommentUncheckedUpdateManyWithoutRecipeNestedInput;

    @Field(() => LikeUncheckedUpdateManyWithoutRecipeNestedInput, {nullable:true})
    likes?: LikeUncheckedUpdateManyWithoutRecipeNestedInput;
}
