import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoomComponent } from './search-room/search-room.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { RoomsComponent } from './details-room/components/rooms/rooms.component';



@NgModule({
  declarations: [SearchRoomComponent, DetailsRoomComponent, RoomsComponent],
  imports: [CommonModule, HotelRoutingModule],
})
export class HotelModule {}
