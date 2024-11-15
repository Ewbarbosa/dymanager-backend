import { Request, Response } from "express";
import { CreateAddressService } from "../../services/address/CreateAddressService";

class CreateAddresController {
  async handle(req: Request, res: Response) {
    const { street, postalCode, district, city, state, contactId, userId } =
      req.body;

    const createAddressService = new CreateAddressService();

    const address = await createAddressService.execute({
      street,
      postalCode,
      district,
      city,
      state,
      contactId,
      userId,
    });

    return res.status(201).json(address);
  }
}

export { CreateAddresController };
