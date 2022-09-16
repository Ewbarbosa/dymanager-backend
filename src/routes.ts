import {Router, Request, Response} from 'express';

const router = Router();

// rotas
router.get('/', (req: Request, res: Response) => {
  return res.json({ok: true})
  
  // se quiser lançar uma exceção como erro utilizar a linha abaixo
  //throw new Error('Erro ao fazer essa requisição.')
})

export {router};
