import { Field, InputType } from '@nestjs/graphql';
import { Decimal } from '@prisma/client/runtime/client';
import { Unit } from 'prisma/generated/graphql/prisma';

@InputType()
export class IngredientCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Decimal, {nullable:false})
    price!: number;

    @Field(() => Unit, { nullable: true })
    defaultUnit?: `${Unit}`;
}
