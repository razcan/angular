import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ViewEncapsulation, NgModule } from '@angular/core' ;
import { ListaCvComponent } from './../lista-cv/lista-cv.component';
import { ActivatedRoute } from '@angular/router';

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
  public Id;
@Input() valPasarica: number;
@Input() nume: string;
  constructor(private route: ActivatedRoute) { }
  result;
  ngOnInit() {
    const IdRuta = this.route.snapshot.params['ID'];
    this.Id = IdRuta;
  }


}

