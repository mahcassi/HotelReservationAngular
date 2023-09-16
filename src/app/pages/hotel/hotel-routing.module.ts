import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRoomComponent } from './details-room/details-room.component';
import { SearchRoomComponent } from './search-room/search-room.component';

const routes: Routes = [
  {
    path: '',
    component: SearchRoomComponent,
  },
  {
    path: 'details/:hotelId/:roomId',
    component: DetailsRoomComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
