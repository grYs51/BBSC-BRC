import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-infocard',
  templateUrl: './infocard.component.html',
  styleUrls: ['./infocard.component.css']
})
export class InfocardComponent implements OnInit {

  

  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 500px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.cardWidth = 30;
        } else {
          this.cardWidth = 20;
        }
      });
  }

  

  @Input() imageSrc : string = "";

  @Input() cardTitle : string = "";
  @Input() cardWidth : number = 30;
  @Input() cardText : any = "";

  @Input() btnActive : boolean = false;
  @Input() btnLink : string = "";
  @Input() btnText : string = "Go somewhere"
  @Input() routerActive : boolean = true;

}
