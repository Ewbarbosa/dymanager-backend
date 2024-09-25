import prismaClient from "../../prisma";

class ListContactService {
  async execute() {

    const clients = await prismaClient.contact.findMany({
      select: {
        id: true,
        cpfCnpj: true,
        fullName: true,
        rg: true,
        dateOfBirth: true,
        gender: true,
        nationality: true,
        maritalStatus: true,
        phone: true,
        email: true,
        occupation: true,
        workCard: true,
        pisNumber: true,
        fatherName: true,
        motherName: true,
        companyName: true,
        tradeName: true,
        stateRegistration: true,
        municipalRegistration: true,
        responsiblePerson: true,
        responsibleCpf: true,        
      }
    })

    //console.log(clients);

    return clients;
  }
}

export { ListContactService }