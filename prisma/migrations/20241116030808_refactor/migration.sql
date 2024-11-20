/*
  Warnings:

  - You are about to drop the `calls` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `loans` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "calls" DROP CONSTRAINT "calls_contactId_fkey";

-- DropForeignKey
ALTER TABLE "calls" DROP CONSTRAINT "calls_userId_fkey";

-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_bankAccountId_fkey";

-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_callId_fkey";

-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_contactId_fkey";

-- AlterTable
ALTER TABLE "contacts" ADD COLUMN     "isCompany" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "calls";

-- DropTable
DROP TABLE "loans";
