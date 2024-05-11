import { AfterViewInit, Component, ElementRef, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  title = 'Hotel-Inventory-App';
  role: string = 'Admin';
  loggedInUserName:string ="rahul";
  loggedInUserNameFucn(){
    this.loggedInUserName = "rahul reddy";
  }
  // @ViewChild('user',{read:ViewContainerRef})vcr!:ViewContainerRef;
  // ngAfterViewInit(): void {
  //   const componentRef = this.vcr.createComponent(RoomsComponent);
  // }

  @ViewChild('name',{static:true})name!:ElementRef;
  
  ngOnInit(): void {
    this.name.nativeElement.innerText = "HiltonHotel";
    this.loggerservice?.Log('In app component ngOnit() method')
  }
  constructor(@Optional() private loggerservice: LoggerService){};


}
