import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG_SERVICES } from '../AppConfig/appconfigs.service';

@Component({
  selector: 'hinv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title:string ='';
  constructor(@Inject(APP_CONFIG_SERVICES) private appconfigs:any){
    
console.log(this.appconfigs)
  }
  ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  }

}
