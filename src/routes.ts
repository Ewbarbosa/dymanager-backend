import { Router } from "express";

import { AuthUserController } from "./controllers/user/AuthUserController";

import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateUserController } from "./controllers/user/CreateUserController";

import { CreateAddresController } from "./controllers/address/CreateAddressController";
import { UpdateAddressController } from "./controllers/address/UpdateAddressController";
import { DeleteAddressController } from "./controllers/address/DeleteAddressController";
import { ListAddresController } from "./controllers/address/ListAddresController";

import { CreateContactController } from "./controllers/contact/CreateContactController";
import { ListContactController } from "./controllers/contact/ListContactController";
import { UpdateContactController } from "./controllers/contact/UpdateContactController";
import { DeleteContactController } from "./controllers/contact/DeleteContactController";

import { ListProcessController } from "./controllers/process/ListProcessController";
import { FindProcessController } from "./controllers/process/FindProcessController";
import { CreateProcessController } from "./controllers/process/CreateProcessController";
import { DeleteProcessController } from "./controllers/process/DeleteProcessController";
import { UpdateProcessController } from "./controllers/process/UpdateProcessController";
import { CreateContactProcessController } from "./controllers/contactProcess/CreateContactProcessController";

// middleware
import { isAuthenticated } from "./middlewares/isAuthenticated";
import { FindByNamePersonController } from "./controllers/contact/FindByNameContactController";
import { DeleteContactProcessController } from "./controllers/contactProcess/DeleteContactProcessController";
import { FindByIdContactController } from "./controllers/contact/FindByIdContactController";

const router = Router();

// rotas users
router.post("/users", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);
router.get("/me", isAuthenticated, new DetailUserController().handle);

// rotas contacts
router.post("/contact", isAuthenticated, new CreateContactController().handle);
router.get("/contacts", isAuthenticated, new ListContactController().handle);
router.put("/contact", isAuthenticated, new UpdateContactController().handle);
router.delete("/contact", isAuthenticated, new DeleteContactController().handle);
router.get("/contact", isAuthenticated, new FindByNamePersonController().handle);
router.get("/contactId", isAuthenticated, new FindByIdContactController().handle);

// rotas address
router.get("/address", isAuthenticated, new ListAddresController().handle);
router.post("/address", isAuthenticated, new CreateAddresController().handle);
router.put("/address", isAuthenticated, new UpdateAddressController().handle);
router.delete("/address", isAuthenticated, new DeleteAddressController().handle);

// rotas process
router.get("/processes", isAuthenticated, new ListProcessController().handle);
router.get("/process", isAuthenticated, new FindProcessController().handle);
router.post("/process", isAuthenticated, new CreateProcessController().handle);
router.put("/process", isAuthenticated, new UpdateProcessController().handle);
router.post("/contactprocess", isAuthenticated, new CreateContactProcessController().handle);
router.delete("/process", isAuthenticated, new DeleteProcessController().handle);
router.delete("/contactprocess", isAuthenticated, new DeleteContactProcessController().handle);

// se quiser lançar uma exceção como erro utilizar a linha abaixo
//throw new Error('Erro ao fazer essa requisição.')

export { router };
