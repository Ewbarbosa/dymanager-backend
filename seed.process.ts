import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// Tipagem do PrismaClient
const prisma = new PrismaClient();

// Definindo a interface para os dados de usuário
interface ProcessData {
  forum: string;
  processNumber: string;
  courtDivision: string;
  action: string;
  distributedAt: Date;
  causeValue: number;
  status: string;
  observation: string;
  userId: number;
}

async function main() {
  const processes: ProcessData[] = []; // Tipando como um array de UserData

  for (let i = 0; i < 500; i++) {
    const process: ProcessData = {
      forum: faker.string.numeric({ length: 11 }), // CPF fictício
      processNumber: faker.string.numeric({ length: 11 }),
      courtDivision: faker.string.numeric({ length: 11 }),
      action: faker.string.numeric({ length: 11 }),
      distributedAt: faker.date.anytime(),
      causeValue: faker.number.float(),
      status: faker.helpers.arrayElement(["Ativo", "Inativo"]),
      observation: faker.commerce.department(),
      userId: 2,
    };
    processes.push(process);
  }

  await prisma.process.createMany({ data: processes });

  console.log("500 registros inseridos com sucesso!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
