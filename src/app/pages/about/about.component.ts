import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  prizesText : string = "At the end of the week, We'll hold a random raffle that picks winning tickets per category. So collecting more tickets, gives you more chance to win. The bigger the pot, the more winners, we choose to give away 5$ Discord Nitro's. <br>Example scenarios: only 1 Nitro= combined draw, 2 Nitro's= 1 Veteran and 1 Beginner, 3 Nitro&#x27;s= 1 Veteran, 1 Beginner, 1 combined draw, ..."

  constructor() { }

  ngOnInit(): void {
    
  }



}
