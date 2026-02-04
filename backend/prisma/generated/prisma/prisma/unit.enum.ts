import { registerEnumType } from '@nestjs/graphql';

export enum Unit {
    GRAM = "GRAM",
    KILOGRAM = "KILOGRAM",
    LITER = "LITER",
    MILLILITER = "MILLILITER",
    CUP = "CUP",
    TABLESPOON = "TABLESPOON",
    TEASPOON = "TEASPOON",
    PIECE = "PIECE",
    CLOVES = "CLOVES"
}


registerEnumType(Unit, { name: 'Unit', description: undefined })
