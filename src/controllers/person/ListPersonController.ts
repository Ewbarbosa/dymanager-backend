import { Request, Response } from 'express'
import { ListContactService } from '../../services/contact/ListContactService'

class ListContactController {
  async handle(req: Request, res: Response) {

    const lisContactService = new ListContactService();

    const contats = await lisContactService.execute();

    return res.json(contats);
  }
}

export { ListContactController }