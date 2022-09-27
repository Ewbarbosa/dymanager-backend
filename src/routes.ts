import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

// rotas users
router.post('/users', new CreateUserController().handle)
  
  // se quiser lançar uma exceção como erro utilizar a linha abaixo
  //throw new Error('Erro ao fazer essa requisição.')


export {router};
