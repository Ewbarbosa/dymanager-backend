import prismaClient from '../../prisma'

// lib para criptografar senhas no banco
import { hash } from 'bcryptjs'

interface UserRequest {
  name: string;
  email: string;
  password: string;
  profileId?: number;
}

class CreateUserService {
  async execute({ name, email, password, profileId }: UserRequest) {

    // verifica se enviou um email
    if (!email) {
      throw new Error("Email incorrect")
    }

    // verifica se email já está cadastrado
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        profileId: profileId
      },
      select: {
        id: true,
        email: true,
        name: true
      }
    })

    return user;
  }
}

export { CreateUserService }