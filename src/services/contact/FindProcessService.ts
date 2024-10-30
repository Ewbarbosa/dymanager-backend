import prismaClient from "../../prisma";

class FindProcessService {

  async execute(id: number) {

    const process = await prismaClient.process.findUnique({
      select: {
        id: true,
        forum: true,
        processNumber: true,
        courtDivision: true,
        action: true,
        distributedAt: true,
        causeValue: true,
        status: true,
        observation: true,
      },
      where: {
        id: id
      }
    })

    return process;
  }

}

export { FindProcessService }