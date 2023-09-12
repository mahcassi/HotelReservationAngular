import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHotelComponent,
  },
  {
    path: 'details/:id',
    component: DetailsHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
