import prismaClient from "../../prisma";

class DetailClientService {

  // funcao pra buscar um cliente pelo ID
  async execute(cnpjcpf: string) {

    // equivalente 
    // select * from where id = client_id
    const client = await prismaClient.client.findFirst({
      where: {
        cnpjcpf: cnpjcpf
        //id: client_id
      },
      select: {
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

    return { client };
  }
}

export { DetailClientService }