import { IDefaultDescription } from "./common/default.interface";
import { IRoom } from "./room.interface";

export interface IHotelResponse {
  id: number;
  name: string;
  phoneNumber: string;
  description: string;
  amenityHotel: IDefaultDescription[];
  addressHotel: IAddressHotel;
  rooms: IRoom[];
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

