import prismaClient from "../../prisma"

interface ClientProcessProps {
  client_id: number;
  process_id: number;
}

class CreateClientProcessService {

  async execute({client_id, process_id}: ClientProcessProps) {

    const clientProcess = await prismaClient.clientProcess.create({
      data: {
        client_id: client_id,
        process_id: process_id
      },
      select: {
        client_id: true,
        process_id: true,
        created_at: true
      }
    })

    return clientProcess;
  }

}

export { CreateClientProcessService }