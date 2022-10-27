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
exports.UpdateAddressController = void 0;
const UpdateAddressService_1 = require("../../services/address/UpdateAddressService");
class UpdateAddressController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, street, zip_code, district, city, state } = req.body;
            const updateAddressService = new UpdateAddressService_1.UpdateAddressService();
            const address = yield updateAddressService.execute({ id, street, zip_code, district, city, state });
            return res.json(address);
        });
    }
}
exports.UpdateAddressController = UpdateAddressController;
