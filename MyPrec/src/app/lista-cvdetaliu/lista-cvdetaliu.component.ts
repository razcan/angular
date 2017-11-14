import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ViewEncapsulation, NgModule } from '@angular/core' ;
import { ListaCvComponent } from './../lista-cv/lista-cv.component';

@NgModule ({
  declarations: [ListaCvComponent]
})

@Component({
  selector: 'app-lista-cvdetaliu',
  templateUrl: './lista-cvdetaliu.component.html',
  styleUrls: ['./lista-cvdetaliu.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ListaCvComponent],
})

export class ListaCvdetaliuComponent implements OnInit {
@Input() valPasarica: number;
  constructor() { }

  result;

  ngOnInit() {
  }

}

