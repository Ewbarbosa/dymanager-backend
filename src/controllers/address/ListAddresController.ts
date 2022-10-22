import {Request, Response} from 'express'
import { ListAddressService } from '../../services/address/ListAddressService';

class ListAddresController{

  async handle(req: Request, res: Response){

    const { client_id } = req.body;

    const listAddressService = new ListAddressService();

    const address = await listAddressService.execute(client_id);

    return res.json(address);
  }
}

export {ListAddresController}