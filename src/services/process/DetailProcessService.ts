import prismaClient from "../../prisma";

interface ProcessProps {
  id: number;
}

class DetailProcessService {

  async execute({ id }: ProcessProps) {

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
      }
    })

    return { process };
  }
}

export { DetailProcessService }