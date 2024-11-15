import prismaClient from "../../prisma";

class FindByNameContactService {
  async execute(fullName: string) {
    const contacts = await prismaClient.contact.findMany({
      select: {
        id: true,
        cpfCnpj: true,
        fullName: true,
      },
      where: {
        fullName: {
          contains: fullName,
          mode: "insensitive",
        },
      },
    });

    return contacts;
  }
}

export { FindByNameContactService };
