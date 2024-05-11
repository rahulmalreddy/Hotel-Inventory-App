import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class RoomsListComponent implements OnInit, OnChanges,DoCheck, OnDestroy{
  @Input() rooms: RoomList[] = [];
  @Input() userType: string = '';
  @Input() HotelOperatorType:string =''
  @Output() selectedRoom = new EventEmitter<RoomList>();

  constructor() {}
  ngOnDestroy(): void {
    console.log("on destroy called");
  }
  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['HotelOperatorType']?.firstChange == false){
      this.HotelOperatorType = changes['HotelOperatorType'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {}
  selectRoom(room: RoomList) {
    this.selectedRoom.emit(room);
  }
}
