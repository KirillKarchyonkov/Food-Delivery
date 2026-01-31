import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { PrismaModule } from "src/prisma/prisma.module";
import { AuthInput } from "./auth.input";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getJwtConfig } from "src/config/jwt.config";
import { UsersService } from "src/users/users.service";

@Module({
  imports: [
    PrismaModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    })
  ],
  providers: [AuthService, AuthResolver, AuthInput, UsersService],
})
export class AuthModule {}
