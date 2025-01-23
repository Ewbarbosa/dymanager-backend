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
      causeValue,
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
      causeValue,
      status,
      observation,
      userId
    });

    //console.log(process)

    return res.status(201).json(process);    
  }
}

export { CreateProcessController }