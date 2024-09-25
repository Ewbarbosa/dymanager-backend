import { Request, Response } from 'express'
import { DeleteContactService } from '../../services/contact/DeleteContactService';

class DeleteContactController {
  async handle(req: Request, res: Response){

    const { cpfCnpj } = req.body;
    
    const deleteContactService = new DeleteContactService();

    const client = await deleteContactService.execute(cpfCnpj);
    
    return res.json(client);
  }
}

export { DeleteContactController }