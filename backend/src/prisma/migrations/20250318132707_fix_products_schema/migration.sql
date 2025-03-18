-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Products" (
    "partNo" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "datasheetLink" TEXT NOT NULL,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("partNo")
);

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

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

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
ALTER TABLE "Ron4_5VMax" ADD CONSTRAINT "Ron4_5VMax_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ron10VMax" ADD CONSTRAINT "Ron10VMax_partNo_fkey" FOREIGN KEY ("partNo") REFERENCES "Products"("partNo") ON DELETE CASCADE ON UPDATE CASCADE;
