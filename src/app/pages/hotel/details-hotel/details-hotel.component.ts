import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHotelResponse } from 'src/app/interfaces/hotel.interface';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-details-hotel',
  templateUrl: './details-hotel.component.html',
  styleUrls: ['./details-hotel.component.css'],
})
export class DetailsHotelComponent implements OnInit {
  detailsHotelResponse!: IHotelResponse;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const hotelId = this._activatedRoute.snapshot.params['id'];

    this._hotelService.getHotelById(hotelId).subscribe((res) => {
      this.detailsHotelResponse = res;
    });
  }
}
