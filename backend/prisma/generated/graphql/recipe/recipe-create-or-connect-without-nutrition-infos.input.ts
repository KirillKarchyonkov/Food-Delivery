import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutNutritionInfosInput } from './recipe-create-without-nutrition-infos.input';

@InputType()
export class RecipeCreateOrConnectWithoutNutritionInfosInput {

    @Field(() => RecipeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => RecipeCreateWithoutNutritionInfosInput, {nullable:false})
    @Type(() => RecipeCreateWithoutNutritionInfosInput)
    create!: RecipeCreateWithoutNutritionInfosInput;
}
