import prismaClient from "../../prisma";

class DetailUserService {
  async execute(userId: number) {
    // aqui é equivalente à
    // select id, name, email from users where id = user_id
    const user = await prismaClient.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return { user };
  }
}

export { DetailUserService };
