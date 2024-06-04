import { Router } from 'express';

import { AuthUserController } from './controllers/user/AuthUserController';

import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateUserController } from './controllers/user/CreateUserController';

import { CreateAddresController } from './controllers/address/CreateAddressController';
import { UpdateAddressController } from './controllers/address/UpdateAddressController';
import { DeleteAddressController } from './controllers/address/DeleteAddressController';
import { ListAddresController } from './controllers/address/ListAddresController';

import { CreatePersonController } from './controllers/person/CreatePersonController';
import { DetailClientController } from './controllers/person/DetailPersonController';
import { ListPersonController } from './controllers/person/ListPersonController';
import { UpdatePersonController } from './controllers/person/UpdatePersonController';
import { DeletePersonController } from './controllers/person/DeletePersonController';

import { ListProcessController } from './controllers/process/ListProcessController';
import { CreateProcessController } from './controllers/process/CreateProcessController';
import { DetailProcessController } from './controllers/process/DetailProcessController';
import { DeleteProcessController } from './controllers/process/DeleteProcessController';
import { UpdateProcessController } from './controllers/process/UpdateProcessController';
import { CreatePersonProcessController } from './controllers/process/CreatePersonProcessController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// rotas users
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// rotas clients
router.post('/person', isAuthenticated, new CreatePersonController().handle);
router.get('/person', isAuthenticated, new DetailClientController().handle);
router.get('/persons', isAuthenticated, new ListPersonController().handle);
router.put('/person', isAuthenticated, new UpdatePersonController().handle)
router.delete('/person', isAuthenticated, new DeletePersonController().handle);

// rotas address
router.get('/person/address', isAuthenticated, new ListAddresController().handle);
router.post('/person/address', isAuthenticated, new CreateAddresController().handle);
router.put('/person/address', isAuthenticated, new UpdateAddressController().handle);
router.delete('/person/address', isAuthenticated, new DeleteAddressController().handle);

// rotas process
router.get('/processes', isAuthenticated, new ListProcessController().handle);
router.get('/process', isAuthenticated, new DetailProcessController().handle);
router.post('/process', isAuthenticated, new CreateProcessController().handle);
router.delete('/process', isAuthenticated, new DeleteProcessController().handle);
router.put('/process', isAuthenticated, new UpdateProcessController().handle);
router.post('/personprocess', isAuthenticated, new CreatePersonProcessController().handle);

// se quiser lançar uma exceção como erro utilizar a linha abaixo
//throw new Error('Erro ao fazer essa requisição.')


export { router };
