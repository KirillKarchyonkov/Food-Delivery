import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeCreateWithoutAuthorInput } from './like-create-without-author.input';

@InputType()
export class LikeCreateOrConnectWithoutAuthorInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => LikeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => LikeCreateWithoutAuthorInput)
    create!: LikeCreateWithoutAuthorInput;
}
