/*
  Warnings:

  - A unique constraint covering the columns `[idEstablishment]` on the table `Price` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idProduct]` on the table `Price` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Price_idEstablishment_key" ON "Price"("idEstablishment");

-- CreateIndex
CREATE UNIQUE INDEX "Price_idProduct_key" ON "Price"("idProduct");
