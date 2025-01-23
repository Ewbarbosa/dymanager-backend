import prismaClient from "../../prisma";

interface ProcessRequest {
  id: number;
  forum: string;
  processNumber: string;
  courtDivision: string;
  action: string;
  distributedAt: Date;
  causeValue: number;
  status: string;
  observation: string;
}

class UpdateProcessService {
  async execute({
    id,
    forum,
    processNumber,
    courtDivision,
    action,
    distributedAt,
    causeValue,
    status,
    observation,
  }: ProcessRequest) {
    // verifica se os campos foram preenchidos
    // if (
    //   forum === "" ||
    //   processNumber === "" ||
    //   courtDivision === "" ||
    //   action === "" ||
    //   !distributedAt ||
    //   !cause_value ||
    //   status === "" ||
    //   observation === "" ||
    //   !client_id
    // ) {
    //   throw new Error("Mandatory fields must be filled");
    // }

    const process = await prismaClient.process.update({
      where: {
        id: id,
      },
      data: {
        forum: forum,
        processNumber: processNumber,
        courtDivision: courtDivision,
        action: action,
        distributedAt: distributedAt,
        causeValue: causeValue,
        status: status,
        observation: observation,
      },
    });

    return process;
  }
}

export { UpdateProcessService };
