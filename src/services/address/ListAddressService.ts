import prismaClient from "../../prisma";

class ListAddressService {

  async execute(client_id: number){

    const address = await prismaClient.address.findMany({
      select: {
        id: true,
        street: true,
        zip_code: true,
        district: true,
        city: true,
        state: true,
        client_id: true
      },
      where:{
        client_id: client_id,
      }
    })

    return address;
  }
}

export { ListAddressService }