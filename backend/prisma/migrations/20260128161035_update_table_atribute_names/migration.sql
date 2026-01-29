/*
  Warnings:

  - You are about to drop the `table_name` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "table_name";

-- CreateTable
CREATE TABLE "courier" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "courier_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "courier_phone_number_key" ON "courier"("phone_number");
