import prismaClient from "../../prisma";

interface ProcessRequest {
  id: number;
  forum: string;
  number: string;
  court_division: string;
  action: string;
  distributed_at: Date;
  cause_value: number;
  status: string;
  observation: string;
  client_id: number;
}

class UpdateProcessService {
  async execute({
    id,
    forum,
    number,
    court_division,
    action,
    distributed_at,
    cause_value,
    status,
    observation,
    client_id
  }: ProcessRequest) {

    // verifica se os campos foram preenchidos
    if (forum === '' || number === '' || court_division === '' || action === '' || !distributed_at || !cause_value || status === '' || observation === '' || !client_id) {
      throw new Error('Mandatory fields must be filled');
    }

    const process = await prismaClient.process.update({
      where: {
        id: id,
      },
      data: {
        forum: forum,
        number_process: number,
        court_division: court_division,
        action: action,
        distributed_at: distributed_at,
        cause_value: cause_value,
        status: status,
        observation: observation,        
      }
    })

    return process;
  }
}

export { UpdateProcessService }