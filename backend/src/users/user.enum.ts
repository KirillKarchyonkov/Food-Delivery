import { registerEnumType } from "@nestjs/graphql";
import { Gender, ActivityLevel, NutritionGoal } from "prisma/generated/enums";

registerEnumType(Gender, { name: 'Gender' });

registerEnumType(ActivityLevel, { name: 'ActivityLevel' });

registerEnumType(NutritionGoal, { name: 'NutritionGoal' });

