import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LikeCreateManyAuthorInput } from './like-create-many-author.input';
import { Type } from 'class-transformer';

@InputType()
export class LikeCreateManyAuthorInputEnvelope {

    @Field(() => [LikeCreateManyAuthorInput], {nullable:false})
    @Type(() => LikeCreateManyAuthorInput)
    data!: Array<LikeCreateManyAuthorInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
