import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutNutritionInfosInput } from './recipe-create-without-nutrition-infos.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutNutritionInfosInput } from './recipe-create-or-connect-without-nutrition-infos.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutNutritionInfosInput {

    @Field(() => RecipeCreateWithoutNutritionInfosInput, {nullable:true})
    @Type(() => RecipeCreateWithoutNutritionInfosInput)
    create?: RecipeCreateWithoutNutritionInfosInput;

    @Field(() => RecipeCreateOrConnectWithoutNutritionInfosInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutNutritionInfosInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutNutritionInfosInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;
}
