import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutLikesInput } from '../recipe/recipe-create-nested-one-without-likes.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutLikesInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutLikesInput)
    recipe!: RecipeCreateNestedOneWithoutLikesInput;
}
