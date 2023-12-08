import prismaClient from "../../prisma";

class DetailProcessService {

  async execute(id: number) {

    const process = await prismaClient.process.findFirst({
      where: {
        id: id
      },
      select: {
        id: true,
        forum: true,
        number: true,
        court_division: true,
        action: true,
        distributed_at: true,
        cause_value: true,
        status: true,
        observation: true,
        client_id: true
      }
    })

    return { process };
  }
}

export { DetailProcessService }