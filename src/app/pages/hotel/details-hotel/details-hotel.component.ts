import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IHotelResponse } from 'src/app/interfaces/hotel.interface';
import { IRoom } from 'src/app/interfaces/room.interface';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-details-hotel',
  templateUrl: './details-hotel.component.html',
  styleUrls: ['./details-hotel.component.css'],
})
export class DetailsHotelComponent implements OnInit {
  detailsHotelResponse!: IHotelResponse;
  room!: IRoom;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _hotelService: HotelService
  ) {}

  ngOnInit(): void {
    const hotelId = this._activatedRoute.snapshot.params['hotelId'];
    const roomId = this._activatedRoute.snapshot.params['roomId'];

    this._hotelService.getHotelById(hotelId).subscribe((res) => {
      this.detailsHotelResponse = res;
    });

    this._hotelService.getRoomById(roomId).subscribe((res) => {
      this.room = res;
    });
  }
}
