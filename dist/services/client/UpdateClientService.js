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
exports.UpdateClientService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateClientService {
    // funcao main/principal da classe
    execute({ id, name, cnpjcpf, sex, nationality, born_in, telephone, telephone2, email, status }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verifica se os campos foram preenchidos
            if (name === '' || cnpjcpf === '' || sex === '' || nationality === '' || !born_in || telephone === '' || email === '') {
                throw new Error('Mandatory fields must be filled');
            }
            // recebe os campos e usa o metodo create pra gravar no banco de dados
            const client = yield prisma_1.default.client.update({
                where: {
                    id: id,
                },
                data: {
                    name: name,
                    cnpjcpf: cnpjcpf,
                    sex: sex,
                    nationality: nationality,
                    born_in: born_in,
                    telephone: telephone,
                    telephone2: telephone2,
                    email: email,
                    status: status
                }
            });
            return client;
        });
    }
}
exports.UpdateClientService = UpdateClientService;
