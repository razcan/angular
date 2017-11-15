import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { ViewEncapsulation, NgModule } from '@angular/core' ;
import { ListaCvComponent } from './../lista-cv/lista-cv.component';
import { ActivatedRoute } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './../app.component';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { URLSearchParams } from '@angular/http';

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
  results: any ;
  val1;

  @Input() numeInput: string;

  constructor(private http: Http, private route: ActivatedRoute) { }
  ngOnInit() {

    let params = new HttpParams();
    params = params.append('var1', this.val1);

    const IdRuta = this.route.snapshot.params['ID'];
    this.Id = IdRuta;
    this.http.get('http://localhost:3000/cv/' + this.Id).subscribe((res) => {
      const results = res.json();
      this.results = results;
    }
  );
  }
}
