import prismaClient from "../../prisma";

interface AddressRequest {
  street: string;
  postalCode: string;
  district: string;
  city: string;
  state: string;  
  contactId: number;
  userId: number;
}

class CreateAddressService {
  async execute({ street, postalCode, district, city, state, contactId, userId }: AddressRequest) {

    // recebe os campos e usa o metodo create pra salvar no banco
    const address = await prismaClient.address.create({
      data:{
        street: street,
        postalCode: postalCode,
        district: district,
        city: city,
        state: state,        
        contactId: contactId,
        userId: userId 
      },
      select:{
        street: true,
        postalCode: true,
        district: true,
        city: true,
        state: true,        
        contactId: true,
        userId: true
      }
    })  
  
    return address;
  }
}

export { CreateAddressService }