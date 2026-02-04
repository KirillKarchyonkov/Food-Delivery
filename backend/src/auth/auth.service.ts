import { Response } from 'express';
import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthInput } from "./auth.input";
import { hash, verify } from "argon2";
import { IAuthTokenData } from "./auth.interface";
import { UsersService } from "src/users/users.service";
import { isDev } from 'src/utils/is-dev.util';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private configService: ConfigService,
        private jwt: JwtService,
        private usersService: UsersService
    ) { }

    private EXPIRE_DAY_REFRESH_TOKEN = 3;
    REFRESH_TOKEN_NAME = 'refreshToken';

    async register(input: AuthInput) {
        try {
            const email = input.email.toLocaleLowerCase()
            const existingUser = await this.prisma.user.findFirst({
                where: {
                    email: {
                        equals: email,
                        mode: 'insensitive'
                    }
                }
            })

            if (existingUser) {
                throw new BadRequestException('Пользователь с таким email уже существует');
            }

            const user = await this.prisma.user.create({
                data: {
                    email: email,
                    password: (await hash(input.password)),
                }
            });

            const tokens = this.generateTokens({
                id: user.id,
                role: user.role
            })

            return { user, ...tokens };

        } catch (error) {
            throw new BadRequestException('Ошибка регистрации: ' + error);
        }
    }

    async login(input: AuthInput) {
        const user = await this.validateUser(input)

        const tokens = this.generateTokens({
            id: user.id,
            role: user.role
        })

        return { user, ...tokens }
    }

    async getNewTokens(refreshToken: string) {
        const result = await this.jwt.verifyAsync<Pick<IAuthTokenData, 'id'>>(refreshToken)
        if (!result) throw new BadRequestException('Неверный refresh токен')

        const user = await this.usersService.findById(result.id)

        if (!user) {
            throw new NotFoundException('Пользователя не существует')
        }

        const tokens = this.generateTokens({
            id: user.id,
            role: user.role
        })

        return { user, ...tokens}
    } 

    private async validateUser(input: AuthInput) {
        const email = input.email

        const user = await this.usersService.findByEmail(email)

        if (!user) {
            throw new NotFoundException('Неверный email или пароль')
        }

        const isPasswordValid = await verify(user.password, input.password)

        if (!isPasswordValid) {
            throw new NotFoundException('Неверный email или пароль')
        }

        return user
    }

    private generateTokens(data: IAuthTokenData) {
        const accessToken = this.jwt.sign(data, {
            expiresIn: '1h'
        })

        const refreshToken = this.jwt.sign(
            {
                id: data.id
            },
            {
                expiresIn: `${this.EXPIRE_DAY_REFRESH_TOKEN}d`
            })

        return {
            accessToken,
            refreshToken
        }
    }

    toggleRefreshTokenCookie(response: Response, token: string | null) {

        const isRemoveCookie = !token;
        const expiresIn = isRemoveCookie
            ? new Date()
            : new Date(Date.now() + 1000 * 60 * 60 * 24 * this.EXPIRE_DAY_REFRESH_TOKEN);

        response.cookie(this.REFRESH_TOKEN_NAME, token || '', {
            httpOnly: true,
            domain: this.configService.get<string>('COOKIE_DOMAIN'),
            expires: expiresIn,
            sameSite: isDev(this.configService) ? 'none' : 'strict',
            secure: true
        });
    }
}
