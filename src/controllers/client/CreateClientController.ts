import { Request, Response } from 'express'
import { CreateClientService } from '../../services/client/CreateClientService'

class CreateClientController {

  async handle(req: Request, res: Response){
    const {
      name, 
      rg,
      cnpjcpf, 
      sex, 
      nationality, 
      born_in, 
      telephone, 
      telephone2,
      email,
      status,
      user_id
    } = req.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      name, 
      rg,
      cnpjcpf, 
      sex, 
      nationality, 
      born_in, 
      telephone, 
      telephone2,
      email,
      status,
      user_id
    });
    
    return res.json(client);
  }
}

export { CreateClientController }