import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG_SERVICES } from './AppConfig/appconfigs.service';

@Injectable()
export class LoggerService {

  constructor(
    @Inject (APP_CONFIG_SERVICES) private appsConfigs : string  ) { 
      console.log( this.appsConfigs );
    }

  Log(msg:string){
    console.log( this.appsConfigs + msg);
  }
}
