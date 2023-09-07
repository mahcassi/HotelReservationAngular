import { Component, OnInit } from '@angular/core';
import { IHotelResponse } from 'src/app/interfaces/hotel.interface';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css'],
})
export class SearchHotelComponent implements OnInit {
  hotels: IHotelResponse[] = [];

  constructor(private _hotelService: HotelService) {}

  ngOnInit(): void {
    this.searchHotels();
  }

  searchHotels() {
    this._hotelService.getHotels().subscribe((res) => {
      this.hotels = res;
    });
  }
}
