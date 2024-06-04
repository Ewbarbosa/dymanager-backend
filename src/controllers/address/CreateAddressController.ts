import { Request, Response } from 'express'
import { CreateAddressService } from '../../services/address/CreateAddressService'

class CreateAddresController {
  async handle(req: Request, res: Response) {

    const { street, zip_code, district, city, state, user_id, person_id } = req.body;

    const createAddressService = new CreateAddressService();

    const address = await createAddressService.execute({
      street,
      zip_code,
      district,
      city,
      state,      
      person_id,
      user_id,
    });

    return res.json(address);
  }
}

export { CreateAddresController }