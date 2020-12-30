import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  links= [
    {
      Name: 'Home',
      Route: '/homepage'
    },
    {
      Name: 'BRC3',
      Route: 'brc3/dashboard',
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
