import prismaClient from "../../prisma";

class ListPersonService {
  async execute(){

    const clients = await prismaClient.person.findMany({
      select:{
        id: true,
        name: true,
        cnpjcpf: true,
        sex: true,
        nationality: true,
        born_in: true,
        telephone: true,
        telephone2: true,
        email: true,
        status: true
      }
    })

    //console.log(clients);

    return clients;
  }
}

export { ListPersonService }