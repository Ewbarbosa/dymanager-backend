import prismaClient from "../../prisma";

export type Gender = 'MALE' | 'FEMALE' | 'OTHER' | 'NOT_SPECIFIED';

export type MaritalStatus = 'SINGLE' | 'MARRIED' | 'DIVORCED' | 'WIDOWED' | 'SEPARATED' | 'OTHER';

// aqui é criado uma interface do tipo ContactRequest
interface ContactRequest {
  cpfCnpj: string;
  fullName: string;
  rg?: string;
  dateOfBirth?: Date;
  gender?: Gender;
  nationality?: string;
  maritalStatus?: MaritalStatus;
  phone?: string;
  email?: string;
  occupation?: string;
  workCard?: string;
  pisNumber?: string;
  fatherName?: string;
  motherName?: string;
  companyName?: string;
  tradeName?: string;
  stateRegistration?: string;
  municipalRegistration?: string;
  responsiblePerson?: string;
  responsibleCpf?: string;

  userId: number;
}

class CreateContactService {

  // funcao main/principal da classe
  async execute(
    {
      cpfCnpj,
      fullName,
      rg,
      dateOfBirth,
      gender,
      nationality,
      maritalStatus,
      phone,
      email,
      occupation,
      workCard,
      pisNumber,
      fatherName,
      motherName,
      companyName,
      tradeName,
      stateRegistration,
      municipalRegistration,
      responsiblePerson,
      responsibleCpf,
      userId
    }: ContactRequest) {

    const contactExists = await prismaClient.contact.findFirst({
      where: {
        cpfCnpj: cpfCnpj
      }
    });

    if (contactExists) {
      throw new Error("CPF/CNPJ já cadastrado");
    }

    // recebe os campos e usa o metodo create pra gravar no banco de dados
    const contact = await prismaClient.contact.create({
      data: {
        cpfCnpj,
        fullName,
        rg,
        dateOfBirth,
        gender,
        nationality,
        maritalStatus,
        phone,
        email,
        occupation,
        workCard,
        pisNumber,
        fatherName,
        motherName,
        companyName,
        tradeName,
        stateRegistration,
        municipalRegistration,
        responsiblePerson,
        responsibleCpf,
        userId
      },
      select: {
        id: true,
        cpfCnpj: true,
        fullName: true,
      }
    });

    return contact;
  }

}

export { CreateContactService }