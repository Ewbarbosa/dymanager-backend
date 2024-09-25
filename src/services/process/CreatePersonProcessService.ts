import prismaClient from "../../prisma"

interface ContactProcessProps {
  contactId: number;
  processId: number;
}

class CreateContactProcessService {

  async execute({ contactId, processId }: ContactProcessProps) {

    const contactProcess = await prismaClient.contactProcess.create({
      data: {        
        contactId,
        processId
      },
      select: {
        contactId: true,
        processId: true,
        createdAt: true
      }
    })

    return contactProcess;
  }

}

export { CreateContactProcessService }