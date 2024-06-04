import prismaClient from "../../prisma";

// aqui é criado uma interface do tipo personRequest
interface PersonRequest {
  name: string;
  rg: string;
  cnpjcpf: string;
  sex: string;
  nationality: string;
  born_in: Date;
  telephone: string;
  telephone2: string;
  email: string;
  type: string;
  status: string;
  user_id: number;
}

class CreatePersonService {

  // funcao main/principal da classe
  async execute({ name, rg, cnpjcpf, sex, nationality, born_in, telephone, telephone2, email, type, status, user_id }: PersonRequest) {

    // verifica se os campos foram preenchidos
    //if ( name === '' || cnpjcpf === '' || sex === '' || nationality === '' || !born_in || telephone === '' || email === ''){
    //  throw new Error('Mandatory fields must be filled')
    //}

    const personAlreadyExists = await prismaClient.person.findFirst({
      where: {
        cnpjcpf: cnpjcpf
      }
    });

    if(personAlreadyExists){
      throw new Error("CPF/CNPJ já cadastrado");
    }

    // recebe os campos e usa o metodo create pra gravar no banco de dados
    const person = await prismaClient.person.create({
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
        type: type,
        status: status,
        user_id: user_id
      },
      select:{
        id: true,
        name: true,
        cnpjcpf: true
      }
    });

    return person;
  }

}

export { CreatePersonService }