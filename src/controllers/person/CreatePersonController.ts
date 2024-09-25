import { Request, Response } from 'express'

import { CreateContactService } from '../../services/contact/CreateContactService';

class CreateContactController {

  async handle(req: Request, res: Response){
    const {
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
    } = req.body;

    const createPersonService = new CreateContactService();
        
    const contact = await createPersonService.execute({
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
    });
    
    return res.json(contact);
  }
}

export { CreateContactController }