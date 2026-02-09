import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { LikeWhereUniqueInput } from './like-where-unique.input';
import { Type } from 'class-transformer';
import { LikeUpdateWithoutAuthorInput } from './like-update-without-author.input';
import { LikeCreateWithoutAuthorInput } from './like-create-without-author.input';

@InputType()
export class LikeUpsertWithWhereUniqueWithoutAuthorInput {

    @Field(() => LikeWhereUniqueInput, {nullable:false})
    @Type(() => LikeWhereUniqueInput)
    where!: Prisma.AtLeast<LikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => LikeUpdateWithoutAuthorInput, {nullable:false})
    @Type(() => LikeUpdateWithoutAuthorInput)
    update!: LikeUpdateWithoutAuthorInput;

    @Field(() => LikeCreateWithoutAuthorInput, {nullable:false})
    @Type(() => LikeCreateWithoutAuthorInput)
    create!: LikeCreateWithoutAuthorInput;
}
