import { Component, OnInit } from '@angular/core';
import { GetconfigService } from 'src/app/shared/service/getconfig.service';
@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  OverviewSorted: any[]= [];

  constructor(public configsrv: GetconfigService) {
    this.OverviewSorted = configsrv.overview.sort((a,b) => b.TotalTickets - a.TotalTickets)
  
   }

  ngOnInit(): void {
    console.log(this.configsrv.overview);
  }

}
