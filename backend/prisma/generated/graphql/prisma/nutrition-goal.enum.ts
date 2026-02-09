import { registerEnumType } from '@nestjs/graphql';

export enum NutritionGoal {
    WEIGHT_LOSS = "WEIGHT_LOSS",
    MAINTAINANCE = "MAINTAINANCE",
    MUSCLE_GAIN = "MUSCLE_GAIN"
}


registerEnumType(NutritionGoal, { name: 'NutritionGoal', description: undefined })
