import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
import { Ng2FileInputModule } from 'ng2-file-input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SaUplodamComponent } from './sa-uplodam/sa-uplodam.component';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [BrowserModule,
            FileUploadModule,
            Ng2FileInputModule.forRoot() // <-- include it in your app module
           ],
  declarations: [SaUplodamComponent]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((res) => {
    const result = res.json();
    this.result = result;
  });
  }

  constructor(private http: Http) {}

  // tslint:disable-next-line:member-ordering
  title = 'app';
  nume;
  prenume;
  dataNastere;
  diplome;
  Remarks;
  AutoEval;
  response;
  rezultat;
  array;
  result:any;
  varButon: any;

  data =  new Date();
  dataprelucrata = this.data.getDate().toString() + ' - ' + (1 + this.data.getMonth()) + ' - ' + this.data.getFullYear().toString()  ;

 afiseazadate() {
    this.http.get('http://localhost:3000').subscribe((res) => {
      const varButon = res.json();
      this.varButon = varButon; });
    // tslint:disable-next-line:no-trailing-whitespace
    }

  handleSubmit() {
    this.http.post('http://localhost:3000', {nume: this.nume , prenume: this.prenume, dataNastere: this.dataNastere, diplome: this.diplome,
    Remarks: this.Remarks, AutoEval: this.AutoEval
  }).subscribe((res) => {

    const result = res.json();
    console.log(result);

  });
  }
}

