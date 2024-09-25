import { Request, Response } from "express"
import { CreateContactProcessService } from "../../services/process/CreatePersonProcessService"

class CreateContactProcessController {

  async handle(req: Request, res: Response) {

    const createContactProcess = new CreateContactProcessService();

    const { contactId, processId } = req.body;

    const personProcess = await createContactProcess.execute({
      contactId,
      processId
    })

    return res.status(201).json(personProcess);
  }

}

export { CreateContactProcessController }