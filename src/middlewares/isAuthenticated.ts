// middleware 
// função que verifica se o usuário está 
//autenticado antes de acessar a rota privada

import { NextFunction, Request, Response } from 'express'

// metodo que vai verificar o token
import { verify } from 'jsonwebtoken'

interface PayLoad {
  sub: string;
}

export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {

  // receber o token
  const authToken = req.headers.authorization;  

  // se não existir token retorna status 401 de não autorizado
  // e não deixa o usuário prosseguir com a requisição
  if (!authToken) {    
    return res.status(401).end();
  }

  // aqui é criado uma array recebendo o authToken
  // em seguida é usado o metodo split pra pegar apenas o conteudo entre os espaços
  // dentro de colchetes é usado a virgula pra ignorar o primeiro item e o segundo é dado o nome de token
  const [, token] = authToken.split(" ");  

  try {
    // validação do token

    // o metodo verify é usado para validar o token e passar o resultado para o objeto
    // sub é o ID do usuario que foi passando AuthUserService.ts
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as PayLoad;

    //console.log(sub);

    // recuperar o id do token e colocar dentro de uma variavel dentro do req
    req.user_id = sub;

    return next();

  } catch (err) {
    // se algo der errado cai no return    
    return res.status(401).end();
  }
}