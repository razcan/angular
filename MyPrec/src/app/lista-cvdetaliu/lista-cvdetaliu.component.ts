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
  private nume = '';
  prenume;
  dataNastere;
  diplome;
  Remarks;
  AutoEval;
  response;
  rezultat;
  result;
  ID;
  scope: any;

  constructor(private http: Http, private route: ActivatedRoute) { }

  @Input()
  set name(nume: string) {
    this.nume = ('kkt');
  }

  ngOnInit() {
    const IdRuta = this.route.snapshot.params['ID'];
    this.Id = IdRuta;
    this.http.get('http://localhost:3000/cv/' + this.Id).subscribe((res) => {
      const results = res.json();
      this.results = results;
    }
  );
  }
  handleUpdate() {

    this.http.post('http://localhost:3000/update',
        {nume: this.nume , prenume: this.prenume, dataNastere: this.dataNastere, diplome: this.diplome,
        Remarks: this.Remarks, AutoEval: this.AutoEval
      }).subscribe((res) => {
    const result = res.json();
  });
  }
getValues(ID, nume, prenume, dataNastere, diplome, Remarks, AutoEval) {
  console.log(ID);
  console.log(nume);
console.log(prenume);
console.log(dataNastere);
console.log(diplome);
console.log(Remarks);
console.log(AutoEval);
this.http.post('http://localhost:3000/update',
{ID: ID, nume: nume , prenume: prenume, dataNastere: dataNastere, diplome: diplome, Remarks: Remarks, AutoEval: AutoEval
}).subscribe((res) => {
const result = res.json();
});
}

}
