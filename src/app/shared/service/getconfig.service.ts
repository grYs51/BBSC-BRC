import { Injectable } from '@angular/core';
import * as config from 'src/configs/config.js'
import * as overview from 'src/configs/overview.js'
import * as beginners from 'src/configs/beginners.js'
import * as veterans from 'src/configs/veterans.js'

@Injectable({
  providedIn: 'root'
})
export class GetconfigService {
  config : any = config.default;
  overview : any = overview.default;
  beginner : any = beginners.default;
  veteran : any = veterans.default;
  constructor() {
   }

}
