import { Request, Response } from "express";
import { FindByNameContactService } from "../../services/contact/FindByNameContactService";

class FindByNamePersonController {
  async handle(req: Request, res: Response) {
    const findByNameContactService = new FindByNameContactService();

    const { fullName } = req.query;

    const contacts = await findByNameContactService.execute(fullName as string);

    return res.status(200).json(contacts);
  }
}

export { FindByNamePersonController };
