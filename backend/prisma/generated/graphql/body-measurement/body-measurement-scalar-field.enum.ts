import { registerEnumType } from '@nestjs/graphql';

export enum BodyMeasurementScalarFieldEnum {
    id = "id",
    heightCm = "heightCm",
    weightKg = "weightKg",
    goalWeightKg = "goalWeightKg",
    chestCm = "chestCm",
    waistCm = "waistCm",
    thighCm = "thighCm",
    armCm = "armCm",
    activityLevel = "activityLevel",
    natritionGoal = "natritionGoal",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(BodyMeasurementScalarFieldEnum, { name: 'BodyMeasurementScalarFieldEnum', description: undefined })
