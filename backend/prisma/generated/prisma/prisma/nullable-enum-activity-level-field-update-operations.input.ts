import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ActivityLevel } from './activity-level.enum';

@InputType()
export class NullableEnumActivityLevelFieldUpdateOperationsInput {

    @Field(() => ActivityLevel, {nullable:true})
    set?: `${ActivityLevel}`;
}
