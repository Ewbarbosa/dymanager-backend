import prismaClient from "../../prisma"

interface ContactProcessProps {
  contactId: number;
  processId: number;
  role: string;
}

class CreateContactProcessService {

  async execute({ contactId, processId, role }: ContactProcessProps) {

    const contactProcess = await prismaClient.contactProcess.create({
      data: {
        contactId,
        processId,
        role
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