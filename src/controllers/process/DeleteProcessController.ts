import { Request, Response } from "express";
import { DeleteProcessService } from "../../services/process/DeleteProcessService";

class DeleteProcessController {
  async handle(req: Request, res: Response) {

    const { id } = req.body;

    const deleteProcessService = new DeleteProcessService();

    const process = deleteProcessService.execute(id);

    return res.json(process);
  }
}

export { DeleteProcessController }