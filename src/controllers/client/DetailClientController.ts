import { Request, Response } from 'express'
import { DetailClientService } from '../../services/client/DetailClientService'

class DetailClientController {
  async handle(req: Request, res: Response) {

    // salva os dados da requisição
    const { client_id } = req.body;

    // instancia da classe
    const detailClientService = new DetailClientService();

    const client = await detailClientService.execute(client_id);

    return res.json(client);
  }
}

export { DetailClientController }
