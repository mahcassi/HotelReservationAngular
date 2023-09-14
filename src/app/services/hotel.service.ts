import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IHotelResponse } from '../interfaces/hotel.interface';
import { IRoom } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
  constructor(private _http: HttpClient) {}

  getHotels(): Observable<IHotelResponse[]> {
    return this._http.get<IHotelResponse[]>(`${environment.apiUrl}Hotels`);
  }

  getHotelById(id: number): Observable<IHotelResponse> {
    return this._http.get<IHotelResponse>(`${environment.apiUrl}Hotels/${id}`);
  }

  getRooms(): Observable<IRoom[]> {
    return this._http.get<IRoom[]>(`${environment.apiUrl}Rooms`);
  }

  getRoomById(id: number): Observable<IRoom> {
    return this._http.get<IRoom>(`${environment.apiUrl}Rooms/${id}`);
  }
}
