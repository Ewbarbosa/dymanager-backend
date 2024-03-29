import prismaClient from "../../prisma";

// aqui é criado uma interface do tipo clientRequest
interface ClientRequest {
  id: number;
  name: string;
  cnpjcpf: string;
  sex: string;
  nationality: string;
  born_in: Date;
  telephone: string;
  telephone2: string;
  email: string;
  status: string;
}

class UpdateClientService {
  // funcao main/principal da classe
  async execute({ id, name, cnpjcpf, sex, nationality, born_in, telephone, telephone2, email, status }: ClientRequest) {

    // verifica se os campos foram preenchidos
    if ( name === '' || cnpjcpf === '' || sex === '' || nationality === '' || !born_in || telephone === '' || email === ''){
      throw new Error('Mandatory fields must be filled')
    }

    // recebe os campos e usa o metodo create pra gravar no banco de dados
    const client = await prismaClient.client.update({
      where: {
        id : id,
      },
      data:{
        name: name,
        cnpjcpf: cnpjcpf,
        sex: sex,
        nationality: nationality,
        born_in: born_in,
        telephone: telephone,
        telephone2: telephone2,
        email: email,
        status: status
      }
    })
    return client;
  }
}

export { UpdateClientService }