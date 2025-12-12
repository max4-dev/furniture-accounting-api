/*
  Warnings:

  - Added the required column `materialName` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minimumCost` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `type` on table `Workshop` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "materialName" TEXT NOT NULL,
ADD COLUMN     "minimumCost" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Workshop" ALTER COLUMN "type" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_materialName_fkey" FOREIGN KEY ("materialName") REFERENCES "MaterialType"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
