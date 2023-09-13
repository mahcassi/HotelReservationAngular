import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoomComponent } from './search-room/search-room.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { RoomsComponent } from './details-hotel/components/rooms/rooms.component';



@NgModule({
  declarations: [SearchRoomComponent, DetailsHotelComponent, RoomsComponent],
  imports: [CommonModule, HotelRoutingModule],
})
export class HotelModule {}
