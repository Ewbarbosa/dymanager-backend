import prismaClient from "../../prisma";

class FindProcessService {

  async execute(id: number) {

    const process = await prismaClient.process.findUnique({      
      where: {
        id: id
      },
      include: {
        ContactProcess: {
          include: {
            contact: true
          }
        }
      }
    });

    return process;
  }

}

export { FindProcessService }