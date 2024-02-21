import { Router } from 'express';

import { AuthUserController } from './controllers/user/AuthUserController';

import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateUserController } from './controllers/user/CreateUserController';

import { CreateAddresController } from './controllers/address/CreateAddressController';
import { UpdateAddressController } from './controllers/address/UpdateAddressController';
import { DeleteAddressController } from './controllers/address/DeleteAddressController';
import { ListAddresController } from './controllers/address/ListAddresController';

import { CreateClientController } from './controllers/client/CreateClientController';
import { DetailClientController } from './controllers/client/DetailClientController';
import { ListClientController } from './controllers/client/ListClientController';
import { UpdateClientController } from './controllers/client/UpdateClientController';
import { DeleteClientController } from './controllers/client/DeleteClientController';

import { ListProcessController } from './controllers/process/ListProcessController';
import { CreateProcessController } from './controllers/process/CreateProcessController';
import { DetailProcessController } from './controllers/process/DetailProcessController';
import { DeleteProcessController } from './controllers/process/DeleteProcessController';
import { UpdateProcessController } from './controllers/process/UpdateProcessController';
import { CreateClientProcessController } from './controllers/process/CreateClientProcessController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// rotas users
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// rotas clients
router.post('/client', isAuthenticated, new CreateClientController().handle);
router.get('/client', isAuthenticated, new DetailClientController().handle);
router.get('/clients', isAuthenticated, new ListClientController().handle);
router.put('/client', isAuthenticated, new UpdateClientController().handle)
router.delete('/client', isAuthenticated, new DeleteClientController().handle);

// rotas address
router.get('/client/address', isAuthenticated, new ListAddresController().handle);
router.post('/client/address', isAuthenticated, new CreateAddresController().handle);
router.put('/client/address', isAuthenticated, new UpdateAddressController().handle);
router.delete('/client/address', isAuthenticated, new DeleteAddressController().handle);

// rotas process
router.get('/processes', isAuthenticated, new ListProcessController().handle);
router.get('/process', isAuthenticated, new DetailProcessController().handle);
router.post('/process', isAuthenticated, new CreateProcessController().handle);
router.delete('/process', isAuthenticated, new DeleteProcessController().handle);
router.put('/process', isAuthenticated, new UpdateProcessController().handle);
router.post('/clientprocess', isAuthenticated, new CreateClientProcessController().handle);

// se quiser lançar uma exceção como erro utilizar a linha abaixo
//throw new Error('Erro ao fazer essa requisição.')


export { router };
