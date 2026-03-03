import { Field, ID, ObjectType, Int } from '@nestjs/graphql';
import { ActivityLevel, NutritionGoal } from 'prisma/generated/enums';

@ObjectType()
export class BodyMeasurementModel {

    @Field(() => ID)
    id?: string;

    @Field(() => Int, { nullable: true })
    heightCm?: number | null;

    @Field(() => Int, { nullable: true })
    weightKg?: number | null;

    @Field(() => Int, { nullable: true })
    goalWeightKg?: number | null;

    @Field(() => Int, { nullable: true })
    chestCm?: number | null;

    @Field(() => Int, { nullable: true })
    waistCm?: number | null;

    @Field(() => Int, { nullable: true })
    thighCm?: number | null;

    @Field(() => Int, { nullable: true })
    armCm?: number | null;

    @Field(() => ActivityLevel, { nullable: true })
    activityLevel?: ActivityLevel | null;

    @Field(() => NutritionGoal, { nullable: true })
    natritionGoal?: NutritionGoal | null;
}
