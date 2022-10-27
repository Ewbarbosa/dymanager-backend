"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClientService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
/* AQUI É MUITO IMPORTANTE
    CRIEI UMA CLASSE UserTypeError EXTENDENDO DE ERROR
    E POR FIM USO O UserTypeError EM UM TRY CATCH PRA VALIDAR SE EXISTE
    OUTROS REGISTROS RELACIONADOS AO CLIENTE QUE ESTÁ SENDO EXCLUÍDO
*/
class UserTypeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserTypeError';
    }
}
class DeleteClientService {
    execute(cnpjcpf) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const client = yield prisma_1.default.client.delete({
                    where: {
                        cnpjcpf: cnpjcpf,
                    },
                });
                return { client };
            }
            catch (error) {
                throw new UserTypeError('Unable to delete record.');
            }
        });
    }
}
exports.DeleteClientService = DeleteClientService;
