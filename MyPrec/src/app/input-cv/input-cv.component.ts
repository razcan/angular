import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './../app.component';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-input-cv',
  templateUrl: './input-cv.component.html',
  styleUrls: ['./input-cv.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class InputCvComponent implements OnInit {

  constructor(private http: Http) {}
  nume;
  prenume;
  dataNastere;
  diplome;
  Remarks;
  AutoEval;
  response;
  rezultat;
  array;
  varButon: any;
  ngOnInit() {
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
