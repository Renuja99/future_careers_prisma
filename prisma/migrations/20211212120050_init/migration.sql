/*
  Warnings:

  - You are about to drop the `Curriculum_Vitae` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Curriculum_Vitae" DROP CONSTRAINT "Curriculum_Vitae_jobSeekerId_fkey";

-- AlterTable
ALTER TABLE "Job_seeker" ADD COLUMN     "cv_user" TEXT;

-- DropTable
DROP TABLE "Curriculum_Vitae";
