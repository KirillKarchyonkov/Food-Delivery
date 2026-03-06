import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { RecipesModule } from './recipes/recipes.module';
import { OrdersModule } from './orders/orders.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { getCraftGraphQConfig } from './config/graphql.config';
import { TurnstileModule } from "nest-cloudflare-turnstile";
import { ResendModule } from "nestjs-resend";
import { getTurnstileConfig } from './config/turnstile.config';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      useFactory: getCraftGraphQConfig,
      inject: [ConfigService],

    }),
    TurnstileModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getTurnstileConfig,
      inject: [ConfigService]
    }),
    ResendModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.getOrThrow<string>('RESEND_API_KEY')
      }),
      inject: [ConfigService]
    }),
    AuthModule, 
    UsersModule, 
    RecipesModule, 
    PrismaModule,
    OrdersModule,
    EmailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
