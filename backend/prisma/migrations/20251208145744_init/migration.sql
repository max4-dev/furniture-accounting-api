/*
  Warnings:

  - You are about to drop the column `materialName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `typeName` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `workshopName` on the `ProductWorkshop` table. All the data in the column will be lost.
  - Added the required column `materialId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typeId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workshopId` to the `ProductWorkshop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_materialName_fkey";

-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_typeName_fkey";

-- DropForeignKey
ALTER TABLE "ProductWorkshop" DROP CONSTRAINT "ProductWorkshop_workshopName_fkey";

-- DropIndex
DROP INDEX "Material_name_key";

-- DropIndex
DROP INDEX "ProductType_name_key";

-- DropIndex
DROP INDEX "Workshop_name_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "materialName",
DROP COLUMN "typeName",
ADD COLUMN     "materialId" INTEGER NOT NULL,
ADD COLUMN     "typeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ProductWorkshop" DROP COLUMN "workshopName",
ADD COLUMN     "workshopId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "ProductType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_materialId_fkey" FOREIGN KEY ("materialId") REFERENCES "Material"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductWorkshop" ADD CONSTRAINT "ProductWorkshop_workshopId_fkey" FOREIGN KEY ("workshopId") REFERENCES "Workshop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
