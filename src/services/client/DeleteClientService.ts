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

class DeleteClientService {
  async execute(cnpjcpf: string) {

    try {
      const client = await prismaClient.client.delete({
        where: {
          cnpjcpf: cnpjcpf,
        },
      })

      return { client }

    } catch(error) {
      throw new UserTypeError('Unable to delete record.')
    }

  }
}

export { DeleteClientService }