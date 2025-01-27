import { Request, Response } from "express";
import { DeleteContactProcessService } from "../../services/contactProcess/DeleteContactProcessService";

class DeleteContactProcessController {
  async handle(req: Request, res: Response) {
    try {
      const deleteContactProcessService = new DeleteContactProcessService();

      const { contactId, processId } = req.query;

      const contactIdNumber = Number(contactId);
      const processIdNumber = Number(processId);

      const deleteContact = deleteContactProcessService.execute({
        contactId: contactIdNumber,
        processId: processIdNumber
      });

      return res.status(200).json(deleteContact);
    } catch (error) {
      return res.status(500).json({ message: "erro ao deletar o relacionamento" });
    }
  }
}

export { DeleteContactProcessController }