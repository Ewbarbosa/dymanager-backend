import { Router } from 'express';

import { AuthUserController } from './controllers/user/AuthUserController';

import { DetailUserController } from './controllers/user/DetailUserController';
import { CreateUserController } from './controllers/user/CreateUserController';

import { CreateAddresController } from './controllers/address/CreateAddressController';
import { UpdateAddressController } from './controllers/address/UpdateAddressController';
import { DeleteAddressController } from './controllers/address/DeleteAddressController';
import { ListAddresController } from './controllers/address/ListAddresController';

import { CreateContactController } from './controllers/person/CreatePersonController';
import { ListContactController } from './controllers/person/ListPersonController';
import { UpdateContactController } from './controllers/person/UpdateContactController';
import { DeleteContactController } from './controllers/person/DeletePersonController';

import { ListProcessController } from './controllers/process/ListProcessController';
import { CreateProcessController } from './controllers/process/CreateProcessController';
import { DeleteProcessController } from './controllers/process/DeleteProcessController';
import { UpdateProcessController } from './controllers/process/UpdateProcessController';
import { CreateContactProcessController } from './controllers/process/CreateContactProcessController';

// middleware
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// rotas users
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

// rotas clients
router.post('/person', isAuthenticated, new CreateContactController().handle);
router.get('/persons', isAuthenticated, new ListContactController().handle);
router.put('/person', isAuthenticated, new UpdateContactController().handle)
router.delete('/person', isAuthenticated, new DeleteContactController().handle);

// rotas address
router.get('/person/address', isAuthenticated, new ListAddresController().handle);
router.post('/person/address', isAuthenticated, new CreateAddresController().handle);
router.put('/person/address', isAuthenticated, new UpdateAddressController().handle);
router.delete('/person/address', isAuthenticated, new DeleteAddressController().handle);

// rotas process
router.get('/processes', isAuthenticated, new ListProcessController().handle);
router.post('/process', isAuthenticated, new CreateProcessController().handle);
router.delete('/process', isAuthenticated, new DeleteProcessController().handle);
router.put('/process', isAuthenticated, new UpdateProcessController().handle);
router.post('/personprocess', isAuthenticated, new CreateContactProcessController().handle);

// se quiser lançar uma exceção como erro utilizar a linha abaixo
//throw new Error('Erro ao fazer essa requisição.')


export { router };
