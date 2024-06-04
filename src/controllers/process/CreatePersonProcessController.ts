import { Request, Response } from "express"
import { CreatePersonProcessService } from "../../services/process/CreatePersonProcessService"

class CreatePersonProcessController {

  async handle(req: Request, res: Response) {

    const createPersonProcess = new CreatePersonProcessService();

    const { person_id, process_id } = req.body;

    const personProcess = createPersonProcess.execute({
      person_id,
      process_id
    })

    return res.json(personProcess);
  }

}

export { CreatePersonProcessController }