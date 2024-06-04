import { Request, Response } from 'express'
import { DetailPersonService } from '../../services/person/DetailPersonService';

class DetailClientController {
  async handle(req: Request, res: Response) {

    // salva os dados da requisição
    const cnpjcpf = req.query.cnpjcpf as string;

    if (cnpjcpf === '' || cnpjcpf === undefined) {
      return res.status(400).json({ "message": "mandatory fields must be filled" })
    }

    // instancia da classe
    const detailPersonService = new DetailPersonService();

    const person = await detailPersonService.execute({ cnpjcpf });

    return res.json(person);
  }
}

export { DetailClientController }
