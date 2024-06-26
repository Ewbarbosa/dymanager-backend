import prismaClient from "../../prisma";

interface AddressRequest {
  street: string;
  zip_code: string;
  district: string;
  city: string;
  state: string;  
  person_id: number;
  user_id: number;
}

class CreateAddressService {
  async execute({ street, zip_code, district, city, state, person_id, user_id }: AddressRequest) {
    
    //if ( street === '' || zip_code === '' || district === '' || city === '' || state === '' || !client_id){
    //  throw new Error('Mandatory fields must be filled')
    //}

    // recebe os campos e usa o metodo create pra salvar no banco
    const address = await prismaClient.address.create({
      data:{
        street: street,
        zip_code: zip_code,
        district: district,
        city: city,
        state: state,        
        person_id: person_id,
        user_id: user_id 
      },
      select:{
        street: true,
        zip_code: true,
        district: true,
        city: true,
        state: true,        
        person_id: true,
        user_id: true
      }
    })  
  
    return address;
  }
}

export { CreateAddressService }