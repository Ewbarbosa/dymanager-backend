import prismaClient from "../../prisma";

interface ContactProcess {
  contactId: number;
  processId: number;
}

class DeleteContactProcessService {
  async execute({ contactId, processId }: ContactProcess) {

    const process = await prismaClient.contactProcess.delete({
      where: {
        contactId_processId: {
          contactId,
          processId
        }
      }
    });

    return process;
  }
}

export { DeleteContactProcessService }