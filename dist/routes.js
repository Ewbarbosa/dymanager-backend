"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const CreateAddressController_1 = require("./controllers/address/CreateAddressController");
const UpdateAddressController_1 = require("./controllers/address/UpdateAddressController");
const DeleteAddressController_1 = require("./controllers/address/DeleteAddressController");
const ListAddresController_1 = require("./controllers/address/ListAddresController");
const CreateClientController_1 = require("./controllers/client/CreateClientController");
const DetailClientController_1 = require("./controllers/client/DetailClientController");
const ListClientController_1 = require("./controllers/client/ListClientController");
const UpdateClientController_1 = require("./controllers/client/UpdateClientController");
const DeleteClientController_1 = require("./controllers/client/DeleteClientController");
const ListProcessController_1 = require("./controllers/process/ListProcessController");
const CreateProcessController_1 = require("./controllers/process/CreateProcessController");
const DetailProcessController_1 = require("./controllers/process/DetailProcessController");
const DeleteProcessController_1 = require("./controllers/process/DeleteProcessController");
const UpdateProcessController_1 = require("./controllers/process/UpdateProcessController");
// middleware
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const router = (0, express_1.Router)();
exports.router = router;
// rotas users
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// rotas clients
router.post('/client', isAuthenticated_1.isAuthenticated, new CreateClientController_1.CreateClientController().handle);
router.get('/client', isAuthenticated_1.isAuthenticated, new DetailClientController_1.DetailClientController().handle);
router.get('/clients', isAuthenticated_1.isAuthenticated, new ListClientController_1.ListClientController().handle);
router.put('/client', isAuthenticated_1.isAuthenticated, new UpdateClientController_1.UpdateClientController().handle);
router.delete('/client', isAuthenticated_1.isAuthenticated, new DeleteClientController_1.DeleteClientController().handle);
// rotas address
router.get('/client/address', isAuthenticated_1.isAuthenticated, new ListAddresController_1.ListAddresController().handle);
router.post('/client/address', isAuthenticated_1.isAuthenticated, new CreateAddressController_1.CreateAddresController().handle);
router.put('/client/address', isAuthenticated_1.isAuthenticated, new UpdateAddressController_1.UpdateAddressController().handle);
router.delete('/client/address', isAuthenticated_1.isAuthenticated, new DeleteAddressController_1.DeleteAddressController().handle);
// rotas process
router.get('/processes', isAuthenticated_1.isAuthenticated, new ListProcessController_1.ListProcessController().handle);
router.get('/process', isAuthenticated_1.isAuthenticated, new DetailProcessController_1.DetailProcessController().handle);
router.post('/process', isAuthenticated_1.isAuthenticated, new CreateProcessController_1.CreateProcessController().handle);
router.delete('/process', isAuthenticated_1.isAuthenticated, new DeleteProcessController_1.DeleteProcessController().handle);
router.put('/process', isAuthenticated_1.isAuthenticated, new UpdateProcessController_1.UpdateProcessController().handle);
