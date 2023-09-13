import { IAddressHotel } from "./hotel.interface";

export interface IRoom {
  availability: boolean;
  hotelId: number;
  id: number;
  number: string;
  price: number;
  roomType: 2;
  size: string;
  hotelAddress: IAddressHotel;
}