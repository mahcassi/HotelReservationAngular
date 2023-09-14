import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { SearchRoomComponent } from './search-room/search-room.component';

const routes: Routes = [
  {
    path: '',
    component: SearchRoomComponent,
  },
  {
    path: 'details/:hotelId/:roomId',
    component: DetailsHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
