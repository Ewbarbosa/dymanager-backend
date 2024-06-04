import prismaClient from "../../prisma";

// interface do tipo ProcessRequest
interface ProcessRequest {
  forum: string;
  number: string;
  court_division: string;
  action: string;
  distributed_at: Date;
  cause_value: number;
  status: string;
  observation: string;
  user_id: number
}

class CreateProcessService {

  async execute({ forum, number, court_division, action, distributed_at, cause_value, status, observation, user_id }: ProcessRequest) {

    // verifica se os campos foram preenchidos
    //if (forum === '' || number === '' || court_division === '' || action === '' || !distributed_at || !cause_value || status === '' || observation === '' || !client_id) {
    //  throw new Error('Mandatory fields must be filled');
    //}

    const process = await prismaClient.process.create({
      data: {
        forum: forum,
        number_process: number,
        court_division: court_division,
        action: action,
        distributed_at: distributed_at,
        cause_value: cause_value,
        status: status,
        observation: observation,        
        user_id: user_id
      },
      select: {
        id: true,
        forum: true,
        number_process: true
      }
    })    

    return process;
  }
}

export { CreateProcessService }