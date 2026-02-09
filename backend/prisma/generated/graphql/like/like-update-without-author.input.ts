import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutLikesNestedInput } from '../recipe/recipe-update-one-required-without-likes-nested.input';

@InputType()
export class LikeUpdateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    recipe?: RecipeUpdateOneRequiredWithoutLikesNestedInput;
}
