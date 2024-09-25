import prismaClient from "../../prisma";

import { Gender } from "./CreateContactService";
import { MaritalStatus } from "./CreateContactService";

// aqui é criado uma interface do tipo clientRequest
interface ContactRequest {
  id: number;
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
}

class UpdateContactService {
  // funcao main/principal da classe
  async execute(
    {
      id,
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
      responsibleCpf
    }: ContactRequest) {

    // recebe os campos e usa o metodo create pra gravar no banco de dados
    const contact = await prismaClient.contact.update({
      where: {
        id: id,
      },
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
        responsibleCpf
      }
    })
    return contact;
  }
}

export { UpdateContactService }