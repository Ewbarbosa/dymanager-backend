"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// importar sempre como segundo - orientação da lib
// usar pra realizar tratamento de erros
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
// inicialização do express
const app = (0, express_1.default)();
// faz com que o app use JSON
app.use(express_1.default.json());
// libera pra que qualquer IP faça requisição
app.use((0, cors_1.default)());
app.use(routes_1.router);
// middleware de tratamento de erros
// muito util pra lancar exceções com try catch sem quebrar a aplicação
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        // se for uma instancia do tipo erro
        return res.status(400).json({
            error: err.message
        });
    }
    // se não for do tipo erro e mesmo assim é um erro cai nesse return
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
// faz com que o app passe a utilizar a porta 3333
app.listen(process.env.PORT, () => console.log('Server ON!'));
