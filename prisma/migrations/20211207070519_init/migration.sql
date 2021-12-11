-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'JOB_SEEKER', 'EMPLOYER');

-- CreateEnum
CREATE TYPE "Work_hours" AS ENUM ('part_time', 'full_time');

-- CreateEnum
CREATE TYPE "Exp_level" AS ENUM ('junior', 'senior', 'intern');

-- CreateEnum
CREATE TYPE "Job_type" AS ENUM ('remote', 'onSite');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "company_role" VARCHAR(100) NOT NULL,
    "address" VARCHAR(500) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job_seeker" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "firstName" VARCHAR(20) NOT NULL,
    "lastName" VARCHAR(20) NOT NULL,

    CONSTRAINT "Job_seeker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Curriculum_Vitae" (
    "id" SERIAL NOT NULL,
    "jobSeekerId" INTEGER NOT NULL,
    "isPublished" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Curriculum_Vitae_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job_advert" (
    "id" SERIAL NOT NULL,
    "job_title" VARCHAR(255) NOT NULL,
    "company_id" INTEGER NOT NULL,
    "click_count" INTEGER NOT NULL,
    "job_type_id" "Job_type" NOT NULL,
    "closing_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "job_time_id" "Work_hours" NOT NULL,
    "exp_level_id" "Exp_level" NOT NULL,
    "min_wage" INTEGER NOT NULL,
    "max_wage" INTEGER NOT NULL,
    "industry_type_id" INTEGER NOT NULL,
    "job_description" VARCHAR(255) NOT NULL,

    CONSTRAINT "Job_advert_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobAdvertsOnSeekers" (
    "jobSeekerId" INTEGER NOT NULL,
    "jobAdvertId" INTEGER NOT NULL,

    CONSTRAINT "JobAdvertsOnSeekers_pkey" PRIMARY KEY ("jobSeekerId","jobAdvertId")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Industry_type" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "Industry_type_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Company_userId_key" ON "Company"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Job_seeker_userId_key" ON "Job_seeker"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Curriculum_Vitae_jobSeekerId_key" ON "Curriculum_Vitae"("jobSeekerId");

-- AddForeignKey
ALTER TABLE "Company" ADD CONSTRAINT "Company_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job_seeker" ADD CONSTRAINT "Job_seeker_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Curriculum_Vitae" ADD CONSTRAINT "Curriculum_Vitae_jobSeekerId_fkey" FOREIGN KEY ("jobSeekerId") REFERENCES "Job_seeker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job_advert" ADD CONSTRAINT "Job_advert_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job_advert" ADD CONSTRAINT "Job_advert_industry_type_id_fkey" FOREIGN KEY ("industry_type_id") REFERENCES "Industry_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobAdvertsOnSeekers" ADD CONSTRAINT "JobAdvertsOnSeekers_jobSeekerId_fkey" FOREIGN KEY ("jobSeekerId") REFERENCES "Job_seeker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobAdvertsOnSeekers" ADD CONSTRAINT "JobAdvertsOnSeekers_jobAdvertId_fkey" FOREIGN KEY ("jobAdvertId") REFERENCES "Job_advert"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
