import { Request, Response } from 'express'
import { CreateProcessService } from '../../services/process/CreateProcessService'

class CreateProcessController {
  async handle(req: Request, res: Response) {
    const {
      forum,
      processNumber,
      courtDivision,
      action,
      distributedAt,
      cause_value,
      status,
      observation,
      userId
    } = req.body;

    const createProcessService = new CreateProcessService();

    const process = await createProcessService.execute({
      forum,
      processNumber,
      courtDivision,
      action,
      distributedAt,
      cause_value,
      status,
      observation,
      userId
    });

    return res.status(201).json(process);    
  }
}

export { CreateProcessController }