import prismaClient from "../../prisma";

class ListAddressService {

  async execute(contactId: number){

    const address = await prismaClient.address.findMany({
      select: {
        id: true,
        street: true,
        postalCode: true,
        district: true,
        city: true,
        state: true,
        contactId: true
      },
      where:{
        contactId: contactId,
      }
    })

    return address;
  }
}

export { ListAddressService }