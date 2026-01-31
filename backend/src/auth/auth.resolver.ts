import type { IGqlContext } from './../app.interface';
import { AuthInput } from './auth.input';
import { AuthResponse } from './auth.interface';
import { AuthService } from './auth.service';
import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";

@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService,
    ) {}

    @Mutation(() => AuthResponse)
    async login(
        @Args('data') input: AuthInput,
        @Context() { res }: IGqlContext
    ) {
        const {refreshToken, ...response} = await this.authService.login(input);

        this.authService.toggleRefreshToken(res, refreshToken);

        return response
    }

    @Mutation(() => AuthResponse)
    async register(
        @Args('data') input: AuthInput,
        @Context() { res }: IGqlContext
    ) {
        const {refreshToken, ...response} = await this.authService.login(input);

        this.authService.toggleRefreshToken(res, refreshToken);

        return response
    }

}
