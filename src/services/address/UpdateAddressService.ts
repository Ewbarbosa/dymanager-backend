import prismaClient from "../../prisma";

interface AddressRequest {
  id: number;
  street: string;
  zip_code: string;
  district: string;
  city: string;
  state: string;
}

class UpdateAddressService {

  async execute({id, street, zip_code, district, city, state}: AddressRequest){

    const address = await prismaClient.address.update({
      where: {
        id: id,
      },
      data:{
        street: street,
        zip_code: zip_code,
        district: district,
        city: city,
        state: state
      },
    })

    return address;
  }

}

export { UpdateAddressService }