import { Request, Response } from "express";
import { FindByNameContactService } from "../../services/contact/FindByNameContactService";

class FindByNamePersonController {
  async handle(req: Request, res: Response) {
    const findByNameContactService = new FindByNameContactService();

    const { fullName } = req.query;

    const contacts = await findByNameContactService.execute(fullName as string);

    console.log(contacts);

    return res.json(contacts);
  }
}

export { FindByNamePersonController };
