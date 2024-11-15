import { Request, Response } from "express";
import { ListAddressService } from "../../services/address/ListAddressService";

class ListAddresController {
  async handle(req: Request, res: Response) {
    const { person_id } = req.query;

    const listAddressService = new ListAddressService();

    const address = await listAddressService.execute(
      parseInt(person_id as string)
    );

    return res.status(200).json(address);
  }
}

export { ListAddresController };
