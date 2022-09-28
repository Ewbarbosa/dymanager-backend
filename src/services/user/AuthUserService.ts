import prismaClient from "../../prisma";

// compara a senha no banco e a que chega ao backend
import {compare} from 'bcryptjs'

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUserService{
  async execute({email, password}: AuthRequest){
    
    // verifica se email existe
    // aqui é feito uma consulta no banco retornando apenas o primeiro registro 
    const user = await prismaClient.user.findFirst({
      where:{
        email: email
      }
    })
    
    // se não existir nada na variavel retorna a excessão
    if(!user){
      throw new Error('User/Password incorrect')
    }

    // verifica se a senha enviadda está correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
      throw new Error('User/Password incorrect')
    }

    return {ok:true}
  }
}

export {AuthUserService}