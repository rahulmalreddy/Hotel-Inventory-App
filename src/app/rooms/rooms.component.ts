import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  SkipSelf,
  ViewChild,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { APP_SERVICE_CONFIG } from '../AppConfig/appconfig.service';
import { AppConfig } from '../AppConfig/appconfig.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent
  implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy
{
  hotelname: string = 'hilton';
  hideRooms: boolean = true;

  userType: string = '';
  roomsSelected: RoomList | undefined;
  HotelOperatorType: string = 'Hilton Inc';
  @Input() loggedInUserName: string = '';

  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  rooms: Room = {
    availableRooms: 3,
    bookedRooms: 5,
    totalRooms: 20,
  };

  roomlist: RoomList[] = [];
  stream = new Observable((observer) => {
    observer.next('user 1');
    observer.next('user 2');
    observer.next('user 3');
    observer.complete();
  });

  constructor(
    @SkipSelf() private roomService: RoomsService,
    @Inject(APP_SERVICE_CONFIG) private config: AppConfig
  ) {
    console.log('prinitng form rooms component ' + this.config.apiEndpoint);
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
  }
  ngAfterViewChecked(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'RoomsViewDone ';
  }

  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = 'Rooms View';
  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((rooms) => {
      this.roomlist = rooms;
    });
    this.stream.subscribe((data) => {
      console.log(data);
    });

    this.userType = 'Admin';
    this.loggedInUserName.toUpperCase();
    console.log(this.headerComponent);
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
  ToCheckNgOnChanges() {
    this.HotelOperatorType = 'Hilton Inc corp';
  }
  selectedRoom(room: RoomList) {
    this.roomsSelected = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: '5',
      roomType: 'Dulxe Room',
      amenities: 'A/C , wifi, hot-water',
      price: 1500,
      photos: '',
      chekingTime: new Date('11-nov-2024'),
      checkoutTime: new Date('11-nov-2024'),
    };
    this.roomService.addRoom(room).subscribe((data) => {
      this.roomlist = data;
    });

    // this.roomlist.push(room);
    this.roomlist = [...this.roomlist, room];
  }

  editRoom() {
    const room: RoomList = {
      roomNumber: '3',
      roomType: 'Dulxe Room',
      amenities: 'A/C , wifi, hot-water',
      price: 543444440,
      photos: '',
      chekingTime: new Date('11-nov-2024'),
      checkoutTime: new Date('11-nov-2024'),
    };
    this.roomService.editRoom(room).subscribe((data) => {
      this.roomlist = data;
    });
  }

  deleteRoom(){
    this.roomService.deleteRoom('3').subscribe((data) => {
      this.roomlist = data;
    });
  }
}
