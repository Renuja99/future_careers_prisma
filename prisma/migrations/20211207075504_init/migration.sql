/*
  Warnings:

  - Added the required column `industry_type` to the `Industry_type` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Industry_type" ADD COLUMN     "industry_type" VARCHAR(255) NOT NULL;
