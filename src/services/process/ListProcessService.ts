import prismaClient from "../../prisma";

class ListProcessService {
  async execute() {

    const process = await prismaClient.process.findMany({
      select: {
        id: true,
        forum: true,
        number_process: true
      }
    })

    //console.log(process);

    return process;
  }
}

export { ListProcessService }