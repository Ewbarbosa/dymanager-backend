import {Router, Request, Response} from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateClientController } from './controllers/client/CreateClientController';
import { CreateAddresController } from './controllers/address/CreateAddressController';
import { DetailClientController } from './controllers/client/DetailClientController';
import { ListClientController } from './controllers/client/ListClientController';
import { UpdateClientController } from './controllers/client/UpdateClientController';
import { DeleteClientController } from './controllers/client/DeleteClientController';
import { UpdateAddressController } from './controllers/address/UpdateAddressController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DeleteAddressController } from './controllers/address/DeleteAddressController';
import { ListAddresController } from './controllers/address/ListAddresController';

const router = Router();

// rotas users
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// rotas clients
router.post('/client', isAuthenticated, new CreateClientController().handle);
router.get('/client', isAuthenticated, new DetailClientController().handle);
router.get('/client', isAuthenticated, new ListClientController().handle);
router.put('/client', isAuthenticated, new UpdateClientController().handle)
router.delete('/client', isAuthenticated, new DeleteClientController().handle);

// rotas address
router.get('/client/address', isAuthenticated, new ListAddresController().handle);
router.post('/client/address', isAuthenticated, new CreateAddresController().handle);
router.put('/client/address', isAuthenticated, new UpdateAddressController().handle);
router.delete('/client/address', isAuthenticated, new DeleteAddressController().handle);


  
  // se quiser lançar uma exceção como erro utilizar a linha abaixo
  //throw new Error('Erro ao fazer essa requisição.')


export {router};
