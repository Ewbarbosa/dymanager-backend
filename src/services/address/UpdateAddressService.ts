import prismaClient from "../../prisma";

interface AddressRequest {
  id: number;
  street: string;
  postalCode: string;
  district: string;
  city: string;
  state: string;
}

class UpdateAddressService {

  async execute({id, street, postalCode, district, city, state}: AddressRequest){

    const address = await prismaClient.address.update({
      where: {
        id: id,
      },
      data:{
        street: street,
        postalCode: postalCode,
        district: district,
        city: city,
        state: state
      },
    })

    return address;
  }

}

export { UpdateAddressService }