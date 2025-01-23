import { Request, Response } from "express";
import { UpdateProcessService } from "../../services/process/UpdateProcessService";

class UpdateProcessController {
  async handle(req: Request, res: Response) {
    const {
      forum,
      processNumber,
      courtDivision,
      action,
      distributedAt,
      causeValue,
      status,
      observation
    } = req.body;

    const { id } = req.query;

    console.log(id)

    const updateProcessService = new UpdateProcessService();

    const processId = parseInt(id as string);

    const process = await updateProcessService.execute({
      id: processId,
      forum,
      processNumber,
      courtDivision,
      action,
      distributedAt,
      causeValue,
      status,
      observation,
    });

    return res.status(200).json(process);
  }
}

export { UpdateProcessController };
