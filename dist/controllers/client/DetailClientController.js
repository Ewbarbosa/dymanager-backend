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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailClientController = void 0;
const DetailClientService_1 = require("../../services/client/DetailClientService");
class DetailClientController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // salva os dados da requisição
            const { cnpjcpf } = req.body;
            // instancia da classe
            const detailClientService = new DetailClientService_1.DetailClientService();
            const client = yield detailClientService.execute(cnpjcpf);
            return res.json(client);
        });
    }
}
exports.DetailClientController = DetailClientController;
