import prismaClient from "../../prisma";

class UserTypeError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UserTypeError'
  }
}

class DeleteProcessService {
  async execute(id: number) {

    try {
      const process = await prismaClient.process.delete({
        where: {
          id: id,
        },
      })

      return { process }
      
    } catch(error) {
      throw new UserTypeError('Unable to delete record.');
    }
  }

}

export { DeleteProcessService }