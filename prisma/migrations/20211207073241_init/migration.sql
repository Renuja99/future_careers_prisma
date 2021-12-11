/*
  Warnings:

  - You are about to drop the column `firstName` on the `Job_seeker` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Job_seeker` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Job_seeker" DROP COLUMN "firstName",
DROP COLUMN "lastName";
