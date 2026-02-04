import { ApolloDriverConfig } from "@nestjs/apollo";
import { ConfigService } from "@nestjs/config";
import type { IGqlContext } from "src/app.interface";

export const getCraftGraphQConfig = (
    configService: ConfigService
): ApolloDriverConfig => ({
    autoSchemaFile: true,
    playground: configService.get<string>('MODE') === 'development',
    context: ({ req, res }: IGqlContext): IGqlContext => ({ req, res }),
    sortSchema: true,
});