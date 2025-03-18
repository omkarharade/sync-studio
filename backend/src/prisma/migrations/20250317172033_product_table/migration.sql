-- CreateTable
CREATE TABLE "Products" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "subCategory" TEXT NOT NULL,
    "partNo" TEXT NOT NULL,
    "datasheetLink" TEXT NOT NULL,
    "vdssV" INTEGER,
    "vgsV" INTEGER,
    "vthMinV" INTEGER,
    "vthMaxV" INTEGER,
    "idByTA25" INTEGER,
    "vthVMax" INTEGER,
    "ron4_5V_mOhmMax" INTEGER,
    "ron10V_mOhmMax" INTEGER,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Products_partNo_key" ON "Products"("partNo");
