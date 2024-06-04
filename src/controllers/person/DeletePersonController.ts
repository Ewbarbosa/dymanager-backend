import { Request, Response } from 'express'
import { DeletePersonService } from '../../services/person/DeletePersonService';

class DeletePersonController {
  async handle(req: Request, res: Response){

    const { cnpjcpf } = req.body;
    
    const deletePersonService = new DeletePersonService();

    const client = await deletePersonService.execute(cnpjcpf);
    
    return res.json(client);
  }
}

export { DeletePersonController }