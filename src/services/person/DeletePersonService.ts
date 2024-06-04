import prismaClient from "../../prisma";

/* AQUI É MUITO IMPORTANTE
    CRIEI UMA CLASSE UserTypeError EXTENDENDO DE ERROR
    E POR FIM USO O UserTypeError EM UM TRY CATCH PRA VALIDAR SE EXISTE 
    OUTROS REGISTROS RELACIONADOS AO CLIENTE QUE ESTÁ SENDO EXCLUÍDO
*/
class UserTypeError extends Error {
  constructor(message) {
    super(message)
    this.name = 'UserTypeError'
  }
}

class DeletePersonService {
  async execute(cnpjcpf: string) {

    try {
      const person = await prismaClient.person.delete({
        where: {
          cnpjcpf: cnpjcpf,
        },
      })

      return { person }

    } catch(error) {
      throw new UserTypeError('Unable to delete record.');
    }

  }
}

export { DeletePersonService }