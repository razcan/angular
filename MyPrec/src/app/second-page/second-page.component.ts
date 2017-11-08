import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecondPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
