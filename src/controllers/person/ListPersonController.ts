import { Request, Response } from 'express'
import { ListPersonService } from '../../services/person/ListPersonService'

class ListPersonController {
  async handle(req: Request, res: Response) {

    const listPersonService = new ListPersonService();

    const persons = await listPersonService.execute();

    //console.log(persons);

    return res.json(persons);
  }
}

export { ListPersonController }