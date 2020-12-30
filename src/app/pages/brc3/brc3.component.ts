import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brc3',
  templateUrl: './brc3.component.html',
  styleUrls: ['./brc3.component.css']
})
export class Brc3Component implements OnInit {

  routes = [
    {path: '../dashboard', name: 'Dashboard'},
    {path: '../tickets', name: 'Tickets'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
