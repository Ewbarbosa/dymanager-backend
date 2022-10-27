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
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
// compara a senha no banco e a que chega ao backend
const bcryptjs_1 = require("bcryptjs");
// lib para autenticação de usuário, gera token
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute({ email, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verifica se email existe
            // aqui é feito uma consulta no banco retornando apenas o primeiro registro 
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            // se não existir nada na variavel retorna a excessão
            if (!user) {
                throw new Error('User/Password incorrect');
            }
            // verifica se a senha enviadda está correta
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user.password);
            if (!passwordMatch) {
                throw new Error('User/Password incorrect');
            }
            // se deu tudo certo gera um token para o usuario
            const token = (0, jsonwebtoken_1.sign)({
                name: user.name,
                email: user.email
            }, process.env.JWT_SECRET, {
                subject: user.id.toString(),
                expiresIn: '1d'
            });
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                token: token
            };
        });
    }
}
exports.AuthUserService = AuthUserService;
