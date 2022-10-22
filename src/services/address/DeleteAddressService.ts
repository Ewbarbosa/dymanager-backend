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

class DeleteAddressService {
  async execute(id: number) {

    try {
      const address = await prismaClient.address.delete({
        where: {
          id: id,
        },
      })

      return {address};

    } catch (error) {
      console.log('catch')
      throw new UserTypeError('Unable to delete record.');
    }
  }
}

export { DeleteAddressService }