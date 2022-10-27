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
exports.DeleteAddressController = void 0;
const DeleteAddressService_1 = require("../../services/address/DeleteAddressService");
class DeleteAddressController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.body;
            const deleteAddressService = new DeleteAddressService_1.DeleteAddressService();
            const address = yield deleteAddressService.execute(id);
            return res.json(address);
        });
    }
}
exports.DeleteAddressController = DeleteAddressController;
