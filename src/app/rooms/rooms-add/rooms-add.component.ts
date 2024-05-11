import { Component, OnInit } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';

@Component({
  selector: 'hinv-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.css'],
})
export class RoomsAddComponent implements OnInit{

  room:RoomList = {
    roomType: '',
    amenities: '',
    chekingTime: new Date(),
    checkoutTime: new Date(),
    price: 0,
    photos: ''
  }

  successMessage:string='';
  constructor(private roomService: RoomsService){}
  ngOnInit(): void {
   
  }
  AddRoom(){
this.roomService.addRoom(this.room).subscribe((data)=> this.successMessage = 'Room Added Successfully' )
  }

}
