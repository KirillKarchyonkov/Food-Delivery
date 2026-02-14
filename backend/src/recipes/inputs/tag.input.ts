import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RecipeTagInput {

    @Field(() => String, {nullable:false})
    name!: string;

}
