import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthResolver } from "./auth.resolver";
import { PrismaModule } from "src/prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { getJwtConfig } from "src/config/jwt.config";
import { JwtStrategy } from "./strategies/jwt.strategy";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJwtConfig,
    }), 
    UsersModule
  ],
  providers: [AuthService, AuthResolver, JwtStrategy],
})
export class AuthModule {}
