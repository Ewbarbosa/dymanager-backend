import { Request, Response } from "express";
import { DeleteAddressService } from "../../services/address/DeleteAddressService";

class DeleteAddressController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const deleteAddressService = new DeleteAddressService();

    const address = await deleteAddressService.execute(id);

    return res.status(200).json(address);
  }
}

export { DeleteAddressController };
