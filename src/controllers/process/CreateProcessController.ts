import { Request, Response } from 'express'
import { CreateProcessService } from '../../services/process/CreateProcessService'

class CreateProcessController {
  async handle(req: Request, res: Response) {
    const {
      forum,
      number,
      court_division,
      action,
      distributed_at,
      cause_value,
      status,
      observation,
      user_id
    } = req.body;

    const createProcessService = new CreateProcessService();

    const process = await createProcessService.execute({
      forum,
      number,
      court_division,
      action,
      distributed_at,
      cause_value,
      status,
      observation,
      user_id
    });

    return res.json(process);
  }
}

export { CreateProcessController }