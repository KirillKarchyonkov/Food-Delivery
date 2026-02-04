import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutAuthorInput } from './like-create-without-author.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutAuthorInput } from './like-create-or-connect-without-author.input';
import { LikeCreateManyAuthorInputEnvelope } from './like-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';

@InputType()
export class LikeCreateNestedManyWithoutAuthorInput {

    @Field(() => [LikeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => LikeCreateWithoutAuthorInput)
    create?: Array<LikeCreateWithoutAuthorInput>;

    @Field(() => [LikeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutAuthorInput>;

    @Field(() => LikeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyAuthorInputEnvelope)
    createMany?: LikeCreateManyAuthorInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;
}
