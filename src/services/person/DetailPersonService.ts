import prismaClient from "../../prisma";

interface PersonProps {
  cnpjcpf: string;
}

class DetailPersonService {

  // funcao pra buscar um cliente pelo ID
  async execute({ cnpjcpf }: PersonProps) {

    // equivalente 
    // select * from where id = person_id
    const person = await prismaClient.person.findMany({
      where: {
        cnpjcpf: {
          startsWith: cnpjcpf
        }
        //id: person_id
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

    return person;
  }
}

export { DetailPersonService }