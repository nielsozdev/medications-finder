-- CreateTable
CREATE TABLE "Price" (
    "id" TEXT NOT NULL,
    "idEstablishment" TEXT NOT NULL,
    "idProduct" TEXT NOT NULL,
    "prices" DECIMAL(65,30)[],
    "updateAt" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Family" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Family_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubFamily" (
    "id" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "idFamily" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nameSuggestion" TEXT NOT NULL,

    CONSTRAINT "SubFamily_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medication" (
    "id" TEXT NOT NULL,
    "concentration" TEXT NOT NULL,
    "fractions" INTEGER NOT NULL,
    "idPharmaceuticalForm" TEXT NOT NULL,
    "idManufacturer" TEXT NOT NULL,
    "idSubFamily" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "totalActivePrinciple" TEXT NOT NULL,

    CONSTRAINT "Medication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "idMedication" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PharmaceuticalForm" (
    "id" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "groupCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "PharmaceuticalForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Establishment" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "idDistrict" TEXT NOT NULL,
    "phone" TEXT,

    CONSTRAINT "Establishment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manufacturer" (
    "id" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "Manufacturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "District" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idProvince" TEXT NOT NULL,

    CONSTRAINT "District_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "idDepartment" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Price_id_key" ON "Price"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Family_id_key" ON "Family"("id");

-- CreateIndex
CREATE UNIQUE INDEX "SubFamily_id_key" ON "SubFamily"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Medication_id_key" ON "Medication"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Product_id_key" ON "Product"("id");

-- CreateIndex
CREATE UNIQUE INDEX "PharmaceuticalForm_id_key" ON "PharmaceuticalForm"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Establishment_id_key" ON "Establishment"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Manufacturer_id_key" ON "Manufacturer"("id");

-- CreateIndex
CREATE UNIQUE INDEX "District_id_key" ON "District"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Province_id_key" ON "Province"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Department_id_key" ON "Department"("id");

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_idEstablishment_fkey" FOREIGN KEY ("idEstablishment") REFERENCES "Establishment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_idProduct_fkey" FOREIGN KEY ("idProduct") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubFamily" ADD CONSTRAINT "SubFamily_idFamily_fkey" FOREIGN KEY ("idFamily") REFERENCES "Family"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_idPharmaceuticalForm_fkey" FOREIGN KEY ("idPharmaceuticalForm") REFERENCES "PharmaceuticalForm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_idManufacturer_fkey" FOREIGN KEY ("idManufacturer") REFERENCES "Manufacturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medication" ADD CONSTRAINT "Medication_idSubFamily_fkey" FOREIGN KEY ("idSubFamily") REFERENCES "SubFamily"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_idMedication_fkey" FOREIGN KEY ("idMedication") REFERENCES "Medication"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Establishment" ADD CONSTRAINT "Establishment_idDistrict_fkey" FOREIGN KEY ("idDistrict") REFERENCES "District"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "District" ADD CONSTRAINT "District_idProvince_fkey" FOREIGN KEY ("idProvince") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Province" ADD CONSTRAINT "Province_idDepartment_fkey" FOREIGN KEY ("idDepartment") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
