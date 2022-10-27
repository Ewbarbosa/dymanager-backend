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
exports.ListAddresController = void 0;
const ListAddressService_1 = require("../../services/address/ListAddressService");
class ListAddresController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { client_id } = req.body;
            const listAddressService = new ListAddressService_1.ListAddressService();
            const address = yield listAddressService.execute(client_id);
            return res.json(address);
        });
    }
}
exports.ListAddresController = ListAddresController;
