-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER', 'NOT_SPECIFIED');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED', 'SEPARATED', 'OTHER');

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profiles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "permissions" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contacts" (
    "id" SERIAL NOT NULL,
    "cpfCnpj" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "rg" TEXT,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "gender" "Gender",
    "nationality" TEXT,
    "maritalStatus" "MaritalStatus",
    "phone" TEXT,
    "email" TEXT,
    "occupation" TEXT,
    "workCard" TEXT,
    "pisNumber" TEXT,
    "fatherName" TEXT,
    "motherName" TEXT,
    "companyName" TEXT NOT NULL,
    "tradeName" TEXT,
    "stateRegistration" TEXT,
    "municipalRegistration" TEXT,
    "responsiblePerson" TEXT,
    "responsibleCpf" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Contacts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Processes" (
    "id" SERIAL NOT NULL,
    "forum" TEXT,
    "processNumber" TEXT NOT NULL,
    "courtDivision" TEXT,
    "action" TEXT,
    "distributedAt" TIMESTAMP(3),
    "causeValue" DOUBLE PRECISION,
    "status" TEXT,
    "observation" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Processes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactProcess" (
    "contactId" INTEGER NOT NULL,
    "processId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ContactProcess_pkey" PRIMARY KEY ("contactId","processId")
);

-- CreateTable
CREATE TABLE "Addresses" (
    "id" SERIAL NOT NULL,
    "street" TEXT,
    "postalCode" TEXT,
    "district" TEXT,
    "city" TEXT,
    "state" TEXT,
    "contactId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Addresses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Calls" (
    "id" SERIAL NOT NULL,
    "start" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "end" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "contactChannel" TEXT,
    "contactId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Calls_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Loans" (
    "id" SERIAL NOT NULL,
    "nInstallments" INTEGER NOT NULL,
    "vInstallments" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "category" TEXT NOT NULL,
    "bankAccountId" INTEGER NOT NULL,
    "callId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "Loans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Banks" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" INTEGER NOT NULL,

    CONSTRAINT "Banks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BanAccounts" (
    "id" SERIAL NOT NULL,
    "agency" INTEGER NOT NULL,
    "account" INTEGER NOT NULL,
    "bankId" INTEGER NOT NULL,
    "contactId" INTEGER NOT NULL,

    CONSTRAINT "BanAccounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profiles_name_key" ON "Profiles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Contacts_cpfCnpj_key" ON "Contacts"("cpfCnpj");

-- CreateIndex
CREATE INDEX "cpf_index" ON "Contacts"("cpfCnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Processes_processNumber_key" ON "Processes"("processNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Loans_bankAccountId_key" ON "Loans"("bankAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Loans_callId_key" ON "Loans"("callId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contacts" ADD CONSTRAINT "Contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Processes" ADD CONSTRAINT "Processes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactProcess" ADD CONSTRAINT "ContactProcess_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactProcess" ADD CONSTRAINT "ContactProcess_processId_fkey" FOREIGN KEY ("processId") REFERENCES "Processes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Addresses" ADD CONSTRAINT "Addresses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calls" ADD CONSTRAINT "Calls_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Calls" ADD CONSTRAINT "Calls_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_bankAccountId_fkey" FOREIGN KEY ("bankAccountId") REFERENCES "BanAccounts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_callId_fkey" FOREIGN KEY ("callId") REFERENCES "Calls"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Loans" ADD CONSTRAINT "Loans_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BanAccounts" ADD CONSTRAINT "BanAccounts_bankId_fkey" FOREIGN KEY ("bankId") REFERENCES "Banks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BanAccounts" ADD CONSTRAINT "BanAccounts_contactId_fkey" FOREIGN KEY ("contactId") REFERENCES "Contacts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
