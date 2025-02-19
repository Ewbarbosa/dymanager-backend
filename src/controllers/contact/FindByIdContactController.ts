import { Request, Response } from "express";
import { FindByIdContactService } from "../../services/contact/FindByIdContactService";

class FindByIdContactController {
  async handle(req: Request, res: Response) {

    const findById = new FindByIdContactService();

    const { id } = req.query;

    const contact = await findById.execute(Number(id));

    console.log(contact);

    return res.status(200).json(contact);
  }
}

export { FindByIdContactController };