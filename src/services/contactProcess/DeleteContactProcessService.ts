import prismaClient from "../../prisma";

interface ContactProcess {
  contactId: number;
  processId: number;
}

class DeleteContactProcessService {
  async execute({ contactId, processId }: ContactProcess) {

    //console.log(contactId)
    //console.log(processId)

    const processExists = await prismaClient.contactProcess.findFirst({
      where: {
        contactId,
        processId
      }
    });

    if (processExists) {
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
}

export { DeleteContactProcessService }