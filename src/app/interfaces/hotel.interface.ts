export interface IHotelResponse {
  id: number;
  name: string;
  addressHotel: IAddressHotel;
}

export interface IAddressHotel {
  id: number;
  city: string;
  complement: string;
  hotelId: number;
  neighborhood: string;
  number: string;
  state: string;
  street: string;
  zipCode: string;
}
