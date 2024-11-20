import prismaClient from "../../prisma";

class ListProcessService {
  async execute() {
    const process = await prismaClient.process.findMany({
      include: {
        ContactProcess: {
          include: {
            contact: true,
          },
        },
      },
    });

    return process;
  }
}

export { ListProcessService };
