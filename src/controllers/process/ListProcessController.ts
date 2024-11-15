import { Request, Response } from "express";
import { ListProcessService } from "../../services/process/ListProcessService";

class ListProcessController {
  async handle(req: Request, res: Response) {
    const listClientService = new ListProcessService();

    const process = await listClientService.execute();

    return res.status(200).json(process);
  }
}

export { ListProcessController };
