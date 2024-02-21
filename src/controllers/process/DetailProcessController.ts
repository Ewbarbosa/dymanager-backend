import { Request, Response } from "express";
import { DetailProcessService } from "../../services/process/DetailProcessService";

class DetailProcessController {
  async handle(req: Request, res: Response) {

    const reqId = req.query.id as string;

    if (reqId === '' || reqId === undefined){
      return res.status(400).json({ "message": "mandatory fields must be filled" })
    }

    const id = parseInt(reqId)

    const detailProcessService = new DetailProcessService();

    const process = detailProcessService.execute({id});

    return res.json(process);

  }
}

export { DetailProcessController }