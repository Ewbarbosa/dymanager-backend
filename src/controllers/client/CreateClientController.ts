import { Request, Response } from 'express'
import { CreateClientService } from '../../services/client/CreateClientService'

class CreateClientController {

  async handle(req: Request, res: Response){
    const {
      name, 
      cnpjcpf, 
      sex, 
      nationality, 
      born_in, 
      telephone, 
      telephone2,
      email,
      company,
      office,
      status
    } = req.body;

    const createClientService = new CreateClientService();

    const client = await createClientService.execute({
      name, 
      cnpjcpf, 
      sex, 
      nationality, 
      born_in, 
      telephone, 
      telephone2,
      email,
      company,
      office,
      status 
    });
    
    return res.json(client);
  }
}

export { CreateClientController }