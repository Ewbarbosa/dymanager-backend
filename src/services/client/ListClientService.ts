import prismaClient from "../../prisma";

class ListClientService {
  async execute(){

    const clients = await prismaClient.client.findMany({
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

export { ListClientService }