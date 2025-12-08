/*
  Warnings:

  - You are about to drop the `MaterialType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_materialName_fkey";

-- DropTable
DROP TABLE "MaterialType";

-- CreateTable
CREATE TABLE "Material" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "missingPercent" INTEGER NOT NULL,

    CONSTRAINT "Material_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Material_name_key" ON "Material"("name");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_materialName_fkey" FOREIGN KEY ("materialName") REFERENCES "Material"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
