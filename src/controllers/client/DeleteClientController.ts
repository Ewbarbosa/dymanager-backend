import { Request, Response } from 'express'
import { DeleteClientService } from '../../services/client/DeleteClientService'

class DeleteClientController {
  async handle(req: Request, res: Response){

    const { cnpjcpf } = req.body;
    
    const deleteClientService = new DeleteClientService();

    const client = await deleteClientService.execute(cnpjcpf);
    
    return res.json(client);
  }
}

export { DeleteClientController }