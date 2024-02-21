import prismaClient from "../../prisma";

// aqui é criado uma interface do tipo clientRequest
interface ClientRequest {
  name: string;
  rg: string;
  cnpjcpf: string;
  sex: string;
  nationality: string;
  born_in: Date;
  telephone: string;
  telephone2: string;
  email: string;
  status: string;
  user_id: number;
}

class CreateClientService {

  // funcao main/principal da classe
  async execute({ name, rg, cnpjcpf, sex, nationality, born_in, telephone, telephone2, email, status, user_id }: ClientRequest) {

    // verifica se os campos foram preenchidos
    //if ( name === '' || cnpjcpf === '' || sex === '' || nationality === '' || !born_in || telephone === '' || email === ''){
    //  throw new Error('Mandatory fields must be filled')
    //}

    // recebe os campos e usa o metodo create pra gravar no banco de dados
    const client = await prismaClient.client.create({
      data: {
        name: name,
        rg: rg,
        cnpjcpf: cnpjcpf,
        sex: sex,
        nationality: nationality,
        born_in: born_in,
        telephone: telephone,
        telephone2: telephone2,
        email: email,        
        status: status,
        user_id: user_id
      },
      select:{
        id: true,
        name: true,
        cnpjcpf: true
      }
    });

    return client;
  }

}

export { CreateClientService }