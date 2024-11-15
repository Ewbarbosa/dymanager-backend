import { Request, Response } from "express";
import { FindProcessService } from "../../services/contact/FindProcessService";

class FindProcessController {
  async handle(req: Request, res: Response) {
    const { id } = req.query;

    const findProcess = new FindProcessService();

    const process = await findProcess.execute(parseInt(id as string));

    return res.status(200).json(process);
  }
}

export { FindProcessController };
