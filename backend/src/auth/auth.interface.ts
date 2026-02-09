import { Field, ObjectType } from "@nestjs/graphql";
import { User } from "prisma/generated/graphql/user";

export type TAuthTokenData = Pick<User, 'id' | 'role' >

export type TRequestWithUser = {
    user?: TCurrentUser
}

export type TCurrentUser = Omit<User, 'password'>

@ObjectType()
export class AuthResponse {
    @Field(() => User)
    user: User

    @Field()
    accessToken: string;
}

