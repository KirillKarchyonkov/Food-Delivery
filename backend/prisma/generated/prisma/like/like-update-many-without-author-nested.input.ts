import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateWithoutAuthorInput } from './like-create-without-author.input';
import { Type } from 'class-transformer';
import { LikeCreateOrConnectWithoutAuthorInput } from './like-create-or-connect-without-author.input';
import { LikeUpsertWithWhereUniqueWithoutAuthorInput } from './like-upsert-with-where-unique-without-author.input';
import { LikeCreateManyAuthorInputEnvelope } from './like-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { LikeUpdateWithWhereUniqueWithoutAuthorInput } from './like-update-with-where-unique-without-author.input';
import { LikeUpdateManyWithWhereWithoutAuthorInput } from './like-update-many-with-where-without-author.input';
import { LikeScalarWhereInput } from './like-scalar-where.input';

@InputType()
export class LikeUpdateManyWithoutAuthorNestedInput {

    @Field(() => [LikeCreateWithoutAuthorInput], {nullable:true})
    @Type(() => LikeCreateWithoutAuthorInput)
    create?: Array<LikeCreateWithoutAuthorInput>;

    @Field(() => [LikeCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => LikeCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<LikeCreateOrConnectWithoutAuthorInput>;

    @Field(() => [LikeUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => LikeUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<LikeUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => LikeCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => LikeCreateManyAuthorInputEnvelope)
    createMany?: LikeCreateManyAuthorInputEnvelope;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeWhereUniqueInput], {nullable:true})
    @Type(() => LikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [LikeUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => LikeUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<LikeUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [LikeUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => LikeUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<LikeUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [LikeScalarWhereInput], {nullable:true})
    @Type(() => LikeScalarWhereInput)
    deleteMany?: Array<LikeScalarWhereInput>;
}
