import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';

const routes: Routes = [
  {
    path: '',
    component: SearchHotelComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
