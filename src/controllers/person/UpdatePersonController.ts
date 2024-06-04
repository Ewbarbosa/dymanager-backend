import { Request, Response } from 'express'
import { UpdatePersonService } from '../../services/person/UpdatePersonService'

class UpdatePersonController {

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

    const updatePersonService = new UpdatePersonService();

    const person = await updatePersonService.execute({
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

    return res.json(person);
  }

}

export { UpdatePersonController }