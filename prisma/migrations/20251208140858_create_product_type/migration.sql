/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Workshop` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `article` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "article" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "MaterialType" (
    "name" TEXT NOT NULL,
    "missingPercent" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "ProductWorkshop" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "productionTime" DOUBLE PRECISION NOT NULL,
    "workshopName" TEXT NOT NULL,

    CONSTRAINT "ProductWorkshop_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MaterialType_name_key" ON "MaterialType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Workshop_name_key" ON "Workshop"("name");

-- AddForeignKey
ALTER TABLE "ProductWorkshop" ADD CONSTRAINT "ProductWorkshop_workshopName_fkey" FOREIGN KEY ("workshopName") REFERENCES "Workshop"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
