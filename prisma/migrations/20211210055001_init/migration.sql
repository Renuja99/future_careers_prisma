-- DropForeignKey
ALTER TABLE "Job_advert" DROP CONSTRAINT "Job_advert_company_id_fkey";

-- AlterTable
ALTER TABLE "Job_advert" ALTER COLUMN "company_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Job_advert" ADD CONSTRAINT "Job_advert_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
