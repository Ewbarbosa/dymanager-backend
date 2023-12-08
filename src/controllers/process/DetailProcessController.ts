import { Request, Response } from "express";
import { DetailProcessService } from "../../services/process/DetailProcessService";

class DetailProcessController {
  async handle(req: Request, res: Response) {

    const { id } = req.body;

    const detailProcessService = new DetailProcessService();

    const process = detailProcessService.execute(id);

    return res.json(process);

  }
}

export { DetailProcessController }