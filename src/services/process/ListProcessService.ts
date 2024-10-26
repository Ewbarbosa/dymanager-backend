import prismaClient from "../../prisma";

class ListProcessService {
  async execute() {

    const process = await prismaClient.process.findMany({
      select: {
        id: true,
        forum: true,
        processNumber: true,
        courtDivision: true,
        action: true,
        distributedAt: true
      }
    })

    //console.log(process);

    return process;
  }
}

export { ListProcessService }