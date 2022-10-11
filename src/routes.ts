import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateClientController } from './controllers/client/CreateClientController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

// rotas users
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)

// rotas clients
router.post('/clients', isAuthenticated, new CreateClientController().handle)
  
  // se quiser lançar uma exceção como erro utilizar a linha abaixo
  //throw new Error('Erro ao fazer essa requisição.')


export {router};
