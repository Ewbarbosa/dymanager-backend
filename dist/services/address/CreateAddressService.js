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
exports.CreateAddressService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateAddressService {
    execute({ street, zip_code, district, city, state, client_id }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (street === '' || zip_code === '' || district === '' || city === '' || state === '' || !client_id) {
                throw new Error('Mandatory fields must be filled');
            }
            // recebe os campos e usa o metodo create pra salvar no banco
            const address = yield prisma_1.default.address.create({
                data: {
                    street: street,
                    zip_code: zip_code,
                    district: district,
                    city: city,
                    state: state,
                    client_id: client_id
                },
                select: {
                    street: true,
                    zip_code: true,
                    district: true,
                    city: true,
                    state: true,
                    client_id: true
                }
            });
            return address;
        });
    }
}
exports.CreateAddressService = CreateAddressService;
