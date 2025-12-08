-- AlterTable
ALTER TABLE "MaterialType" ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "MaterialType_pkey" PRIMARY KEY ("id");
