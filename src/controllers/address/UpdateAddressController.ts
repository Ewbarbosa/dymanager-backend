import { Request, Response } from "express";
import { UpdateAddressService } from "../../services/address/UpdateAddressService";

class UpdateAddressController {
  async handle(req: Request, res: Response){

    const {id, street, postalCode, district, city, state} = req.body;

    const updateAddressService = new UpdateAddressService();

    const address = await updateAddressService.execute({id, street, postalCode, district, city, state});

    return res.json(address);
  }
}

export { UpdateAddressController }