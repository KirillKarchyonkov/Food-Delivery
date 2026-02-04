import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Difficulty } from './difficulty.enum';

@InputType()
export class EnumDifficultyFieldUpdateOperationsInput {

    @Field(() => Difficulty, {nullable:true})
    set?: `${Difficulty}`;
}
