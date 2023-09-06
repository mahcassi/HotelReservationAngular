import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelRoutingModule } from './hotel-routing.module';



@NgModule({
  declarations: [SearchHotelComponent],
  imports: [CommonModule, HotelRoutingModule],
})
export class HotelModule {}
