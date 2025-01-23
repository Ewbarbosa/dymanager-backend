import prismaClient from "../../prisma";

// compara a senha no banco e a que chega ao backend
import { compare } from 'bcryptjs'

// lib para autenticação de usuário, gera token
import { sign } from 'jsonwebtoken';

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {

    // verifica se email existe
    // aqui é feito uma consulta no banco retornando apenas o primeiro registro 
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    // se não existir nada na variavel retorna a excessão
    if (!user) {
      throw new Error('Usuário/Senha incorretos')
    }

    // verifica se a senha enviadda está correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error('Usuário/Senha incorretos')
    }

    // se deu tudo certo gera um token para o usuario

    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id.toString(),
        expiresIn: '1d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
}

export { AuthUserService }