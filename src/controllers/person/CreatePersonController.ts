import { Request, Response } from 'express'

import { CreatePersonService } from '../../services/person/CreatePersonService';

class CreatePersonController {

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
      type,
      status,
      user_id
    } = req.body;

    const createPersonService = new CreatePersonService();
        
    const person = await createPersonService.execute({
      name, 
      rg,
      cnpjcpf, 
      sex, 
      nationality, 
      born_in, 
      telephone, 
      telephone2,
      email,
      type,
      status,
      user_id
    });
    
    return res.json(person);
  }
}

export { CreatePersonController }