import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelRoutingModule } from './hotel-routing.module';
import { DetailsHotelComponent } from './details-hotel/details-hotel.component';



@NgModule({
  declarations: [SearchHotelComponent, DetailsHotelComponent],
  imports: [CommonModule, HotelRoutingModule],
})
export class HotelModule {}
