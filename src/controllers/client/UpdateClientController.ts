import { Request, Response } from 'express'
import { UpdateClientService } from '../../services/client/UpdateClientService'

class UpdateClientController {

  async handle(req: Request, res: Response){

    const {
      id,
      name, 
      cnpjcpf, 
      sex, 
      nationality, 
      born_in, 
      telephone, 
      telephone2,
      email,
      status
    } = req.body;

    const updateClientService = new UpdateClientService();

    const client = await updateClientService.execute({
      id,
      name,
      cnpjcpf,
      sex,
      nationality,
      born_in,
      telephone,
      telephone2,
      email,
      status
    })

    return res.json(client);
  }

}

export { UpdateClientController }