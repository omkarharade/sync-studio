/*
  Warnings:

  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `idByTA25` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `ron10V_mOhmMax` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `ron4_5V_mOhmMax` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `vdssV` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `vgsV` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `vthMaxV` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `vthMinV` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the column `vthVMax` on the `Products` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Products_partNo_key";

-- AlterTable
ALTER TABLE "Products" DROP CONSTRAINT "Products_pkey",
DROP COLUMN "id",
DROP COLUMN "idByTA25",
DROP COLUMN "ron10V_mOhmMax",
DROP COLUMN "ron4_5V_mOhmMax",
DROP COLUMN "vdssV",
DROP COLUMN "vgsV",
DROP COLUMN "vthMaxV",
DROP COLUMN "vthMinV",
DROP COLUMN "vthVMax",
ADD CONSTRAINT "Products_pkey" PRIMARY KEY ("partNo");

-- CreateTable
CREATE TABLE "VDSS" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "VDSS_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "VGS" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "VGS_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "VTHMin" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "VTHMin_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "VTHMax" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "VTHMax_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "IDByTA25" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "IDByTA25_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "VTHVMax" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "VTHVMax_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "Ron4_5V" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "Ron4_5V_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "Ron10V" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "Ron10V_pkey" PRIMARY KEY ("partNo")
);

-- AddForeignKey
ALTER TABLE "VDSS" ADD CONSTRAINT "VDSS_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VGS" ADD CONSTRAINT "VGS_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VTHMin" ADD CONSTRAINT "VTHMin_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VTHMax" ADD CONSTRAINT "VTHMax_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IDByTA25" ADD CONSTRAINT "IDByTA25_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VTHVMax" ADD CONSTRAINT "VTHVMax_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ron4_5V" ADD CONSTRAINT "Ron4_5V_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ron10V" ADD CONSTRAINT "Ron10V_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;
