import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { Gender } from 'prisma/generated/enums';

@ObjectType()
export class ProfileModel {

    @Field(() => ID)
    id!: string;

    @Field(() => String)
    fullname!: string;

    @Field(() => Gender, { nullable: true })
    gender?: Gender | null;

    @Field(() => Int, { nullable: true })
    age?: number | null;

    @Field(() => String, { nullable: true })
    bio?: string | null;

    @Field(() => Date)
    createdAt!: Date;

    @Field(() => Date)
    updatedAt!: Date;
}
