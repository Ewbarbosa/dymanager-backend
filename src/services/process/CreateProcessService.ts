import prismaClient from "../../prisma";

// interface do tipo ProcessRequest
interface ProcessRequest {
  forum: string;
  processNumber: string;
  courtDivision: string;
  action: string;
  distributedAt: Date;
  causeValue: number;
  status: string;
  observation: string;
  userId: number
}

class CreateProcessService {

  async execute({ forum, processNumber, courtDivision, action, distributedAt, causeValue, status, observation, userId }: ProcessRequest) {

    // verifica se os campos foram preenchidos
    //if (forum === '' || number === '' || court_division === '' || action === '' || !distributed_at || !cause_value || status === '' || observation === '' || !client_id) {
    //  throw new Error('Mandatory fields must be filled');
    //}

    const process = await prismaClient.process.create({
      data: {
        forum: forum,
        processNumber: processNumber,
        courtDivision: courtDivision,
        action: action,
        distributedAt: distributedAt,
        causeValue: causeValue,
        status: status,
        observation: observation,        
        userId: userId
      },
      select: {
        id: true,
        forum: true,
        processNumber: true
      }
    })    

    return process;
  }
}

export { CreateProcessService }