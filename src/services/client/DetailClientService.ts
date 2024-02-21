import prismaClient from "../../prisma";

interface ClientProps {
  cnpjcpf: string;
}

class DetailClientService {

  // funcao pra buscar um cliente pelo ID
  async execute({ cnpjcpf }: ClientProps) {

    // equivalente 
    // select * from where id = client_id
    const client = await prismaClient.client.findMany({
      where: {
        cnpjcpf: {
          startsWith: cnpjcpf
        }
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

    return client;
  }
}

export { DetailClientService }