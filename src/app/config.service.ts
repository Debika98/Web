import { Injectable } from '@angular/core';

import {configuration} from './configuration';
import { HammerGestureConfig } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  config = configuration;

  constructor() {}

  getConfig(){
    return this.config;
  }

}
