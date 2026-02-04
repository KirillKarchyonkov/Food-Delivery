import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumUnitFieldUpdateOperationsInput } from '../prisma/enum-unit-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { RecipeIngredientUpdateManyWithoutIngredientNestedInput } from '../recipe-ingredient/recipe-ingredient-update-many-without-ingredient-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class IngredientUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => EnumUnitFieldUpdateOperationsInput, {nullable:true})
    defaultUnit?: EnumUnitFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => RecipeIngredientUpdateManyWithoutIngredientNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateManyWithoutIngredientNestedInput)
    recipes?: RecipeIngredientUpdateManyWithoutIngredientNestedInput;
}
