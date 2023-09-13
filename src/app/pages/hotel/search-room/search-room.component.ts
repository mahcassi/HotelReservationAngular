import { IRoom } from '../../../interfaces/room.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IHotelResponse } from 'src/app/interfaces/hotel.interface';
import { HotelService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.css'],
})
export class SearchRoomComponent implements OnInit {
  rooms: IRoom[] = [];

  constructor(private _hotelService: HotelService, private _router: Router) {}

  ngOnInit(): void {
    this.searchRooms();
  }

  searchRooms(): void {
    this._hotelService.getRooms().subscribe((res) => {
      this.rooms = res;
    });
  }

  getDetailsRoomById(id: number): void {
    this._router.navigate([`/hotel/details/${id}`]);
  }
}
