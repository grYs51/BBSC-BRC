import { Component, OnInit } from '@angular/core';
import { GetconfigService } from 'src/app/shared/service/getconfig.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  closeButton = false;

  
  constructor(public configsrv: GetconfigService) {
   }

  ngOnInit(): void { }


}
