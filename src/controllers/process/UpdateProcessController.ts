import { Request, Response } from "express";
import { UpdateProcessService } from "../../services/process/UpdateProcessService";

class UpdateProcessController {

  async handle(req: Request, res: Response) {

    const {
      id,
      forum,
      number,
      court_division,
      action,
      distributed_at,
      cause_value,
      status,
      observation,
      client_id
    } = req.body;

    const updateProcessService = new UpdateProcessService();

    const process = await updateProcessService.execute({
      id,
      forum,
      number,
      court_division,
      action,
      distributed_at,
      cause_value,
      status,
      observation,
      client_id
    });

    return res.json(process);
  }
}

export { UpdateProcessController }