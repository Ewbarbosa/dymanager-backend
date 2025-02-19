import { Request, Response } from "express";
import { CreateContactProcessService } from "../../services/contactProcess/CreatePersonProcessService";

class CreateContactProcessController {
  async handle(req: Request, res: Response) {
    const createContactProcess = new CreateContactProcessService();

    const { contacts } = req.body;

    if (!Array.isArray(contacts)) {
      return res.status(400).json({ message: "O json deve ser um array" });
    }

    try {
      const results = await Promise.all(
        contacts.map(async ({ contactId, processId, role }) => {
          return await createContactProcess.execute({ contactId: Number(contactId), processId: Number(processId), role });
        })
      );

      return res.status(201).json(results);
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "erro ao criar relacionamentos" });
    }
  }
}

export { CreateContactProcessController };
