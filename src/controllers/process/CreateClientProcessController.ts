import { Request, Response } from "express"
import { CreateClientProcessService } from "../../services/process/CreateClientProcessService"

class CreateClientProcessController {

  async handle(req: Request, res: Response) {

    const createClientProcess = new CreateClientProcessService();

    const { client_id, process_id } = req.body;

    const clientProcess = createClientProcess.execute({
      client_id,
      process_id
    })

    return res.json(clientProcess);
  }

}

export { CreateClientProcessController }