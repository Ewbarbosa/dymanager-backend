import prismaClient from "../../prisma"

interface PersonProcessProps {
  person_id: number;
  process_id: number;
}

class CreatePersonProcessService {

  async execute({person_id, process_id}: PersonProcessProps) {

    const personProcess = await prismaClient.personProcess.create({
      data: {
        person_id: person_id,
        process_id: process_id
      },
      select: {
        person_id: true,
        process_id: true,
        created_at: true
      }
    })

    return personProcess;
  }

}

export { CreatePersonProcessService }