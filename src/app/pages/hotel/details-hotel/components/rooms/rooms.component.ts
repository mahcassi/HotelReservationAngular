import { Component, Input, OnInit } from '@angular/core';
import { IRoom } from 'src/app/interfaces/room.interface';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  @Input() room!: IRoom;
  
  constructor() {}

  ngOnInit(): void {}
}
