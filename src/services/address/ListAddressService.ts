import prismaClient from "../../prisma";

class ListAddressService {

  async execute(person_id: number){

    const address = await prismaClient.address.findMany({
      select: {
        id: true,
        street: true,
        zip_code: true,
        district: true,
        city: true,
        state: true,
        person_id: true
      },
      where:{
        person_id: person_id,
      }
    })

    return address;
  }
}

export { ListAddressService }