import prismaClient from "../../prisma";

// aqui é criado uma interface do tipo clientRequest
interface PersonRequest {
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

class UpdatePersonService {
  // funcao main/principal da classe
  async execute({ id, name, cnpjcpf, sex, nationality, born_in, telephone, telephone2, email, status }: PersonRequest) {

    // verifica se os campos foram preenchidos
    if ( name === '' || cnpjcpf === '' || sex === '' || nationality === '' || !born_in || telephone === '' || email === ''){
      throw new Error('Mandatory fields must be filled')
    }

    // recebe os campos e usa o metodo create pra gravar no banco de dados
    const person = await prismaClient.person.update({
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
    return person;
  }
}

export { UpdatePersonService }