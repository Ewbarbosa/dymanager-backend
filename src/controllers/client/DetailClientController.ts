import { Request, Response } from 'express'
import { DetailClientService } from '../../services/client/DetailClientService'

class DetailClientController {
  async handle(req: Request, res: Response) {

    // salva os dados da requisição
    const { cnpjcpf } = req.body;

    // instancia da classe
    const detailClientService = new DetailClientService();

    const client = await detailClientService.execute(cnpjcpf);

    return res.json(client);
  }
}

export { DetailClientController }
