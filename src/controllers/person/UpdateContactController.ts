import { Request, Response } from "express";
import { UpdateContactService } from "../../services/contact/UpdateContactService";

class UpdateContactController {
  async handle(req: Request, res: Response) {
    const {
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
      responsibleCpf,
    } = req.body;

    const updatePersonService = new UpdateContactService();

    const contact = await updatePersonService.execute({
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
      responsibleCpf,
    });

    return res.status(200).json(contact);
  }
}

export { UpdateContactController };
