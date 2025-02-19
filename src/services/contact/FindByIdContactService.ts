import prismaClient from "../../prisma";

class FindByIdContactService {
  async execute(id: number) {

    const contact = await prismaClient.contact.findUnique({
      where: {
        id: id
      },
      include: {
        Address: true
      }
    });

    return contact;
  }
}

export { FindByIdContactService }