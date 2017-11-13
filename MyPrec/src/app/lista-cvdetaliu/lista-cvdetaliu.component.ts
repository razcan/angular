import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core' ;

@Component({
  selector: 'app-lista-cvdetaliu',
  templateUrl: './lista-cvdetaliu.component.html',
  styleUrls: ['./lista-cvdetaliu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaCvdetaliuComponent implements OnInit {

  constructor() { }

  result;

  ngOnInit() {
  }

}
