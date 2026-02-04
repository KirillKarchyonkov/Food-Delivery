import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from './unit.enum';

@InputType()
export class EnumUnitFieldUpdateOperationsInput {

    @Field(() => Unit, {nullable:true})
    set?: `${Unit}`;
}
