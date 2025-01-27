import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

// Tipagem do PrismaClient
const prisma = new PrismaClient();

// enum GENDER {
//   MASCULINO = "MASCULINO",
//   FEMININO = "FEMININO",
//   OUTRO = "OUTRO"
// }

// enum MARITIALSTATUS {
//   SOLTEIRO = "SOLTEIRO",
//   CASADO = "CASADO",
//   DIVORCIADO = "DIVORCIADO",
//   VIUVO = "VIUVO",
//   SEPARADO = "SEPARADO",
//   OUTRO = "OUTRO"
// }

// Definindo a interface para os dados de usuário
interface UserData {
  cpfCnpj: string;
  fullName: string;
  rg: string;
  dateOfBirth: Date;
  gender: string;
  nationality: string;
  maritalStatus: string;
  phone: string;
  email: string;
  occupation: string;
  workCard: string;
  pisNumber: string;
  fatherName: string;
  motherName: string;
  userId: number;
}

async function main() {
  const users: UserData[] = []; // Tipando como um array de UserData

  for (let i = 0; i < 500; i++) {
    const user: UserData = {
      cpfCnpj: faker.string.numeric({ length: 11 }), // CPF fictício
      fullName: faker.person.fullName(),
      rg: faker.string.alphanumeric({ length: 9 }),
      dateOfBirth: faker.date.birthdate(),
      gender: faker.person.sex(),
      nationality: faker.location.country(),
      maritalStatus: faker.person.gender(),
      phone: faker.phone.number({ style: "national" }), // Formato fictício de telefone
      email: faker.internet.email(),
      occupation: faker.person.jobTitle(),
      workCard: faker.string.alpha({ length: 8 }),
      pisNumber: faker.string.numeric({ length: 11 }),
      fatherName: faker.person.fullName(),
      motherName: faker.person.fullName(),
      userId: 1, // Assumindo que userId refere-se a um usuário existente
    };
    users.push(user);
  }

  await prisma.contact.createMany({ data: users });

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
