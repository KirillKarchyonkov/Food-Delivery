import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionInfosInput } from './recipe-create-without-nutrition-infos.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionInfosInput } from './recipe-create-or-connect-without-nutrition-infos.input';
import { RecipeUpsertWithoutNutritionInfosInput } from './recipe-upsert-without-nutrition-infos.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutNutritionInfosInput } from './recipe-update-to-one-with-where-without-nutrition-infos.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutNutritionInfosNestedInput {

    @Field(() => RecipeCreateWithoutNutritionInfosInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionInfosInput)
    create?: RecipeCreateWithoutNutritionInfosInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionInfosInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionInfosInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionInfosInput;

    @Field(() => RecipeUpsertWithoutNutritionInfosInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutNutritionInfosInput)
    upsert?: RecipeUpsertWithoutNutritionInfosInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutNutritionInfosInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutNutritionInfosInput)
    update?: RecipeUpdateToOneWithWhereWithoutNutritionInfosInput;
}
