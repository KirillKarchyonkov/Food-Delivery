/*
  Warnings:

  - Added the required column `price` to the `ingredients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredients" ADD COLUMN     "price" DECIMAL(65,30) NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "total" DECIMAL(65,30) NOT NULL;
