/*
  Warnings:

  - You are about to drop the `Ron10V` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ron4_5V` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Ron10V" DROP CONSTRAINT "Ron10V_partNo_fkey";

-- DropForeignKey
ALTER TABLE "Ron4_5V" DROP CONSTRAINT "Ron4_5V_partNo_fkey";

-- DropTable
DROP TABLE "Ron10V";

-- DropTable
DROP TABLE "Ron4_5V";

-- CreateTable
CREATE TABLE "Ron4_5VMax" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "Ron4_5VMax_pkey" PRIMARY KEY ("partNo")
);

-- CreateTable
CREATE TABLE "Ron10VMax" (
    "partNo" TEXT NOT NULL,
    "value" INTEGER,

    CONSTRAINT "Ron10VMax_pkey" PRIMARY KEY ("partNo")
);

-- AddForeignKey
ALTER TABLE "Ron4_5VMax" ADD CONSTRAINT "Ron4_5VMax_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ron10VMax" ADD CONSTRAINT "Ron10VMax_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;
