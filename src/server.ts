import express, {Request, Response, NextFunction} from 'express';

// importar sempre como segundo - orientação da lib
// usar pra realizar tratamento de erros
import 'express-async-errors'

import cors from 'cors';
import { router } from './routes';

// inicialização do express
const app = express();

// faz com que o app use JSON
app.use(express.json());

// libera pra que qualquer IP faça requisição
app.use(cors());

app.use(router);

// middleware de tratamento de erros
// muito util pra lancar exceções com try catch sem quebrar a aplicação
app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
  if(err instanceof Error){
    // se for uma instancia do tipo erro
    return res.status(400).json({
      error: err.message
    })
  }  

  // se não for do tipo erro e mesmo assim é um erro cai nesse return
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error.'
  })
})

// faz com que o app passe a utilizar a porta 3333
app.listen(3333, ()=> console.log('Server ON!'));