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
  selector: 'app-lista-cv',
  templateUrl: './lista-cv.component.html',
  styleUrls: ['./lista-cv.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ListaCvComponent implements OnInit {

  result: any;
  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((res) => {
    const result = res.json();
    this.result = result;
  });
}
constructor(private http: Http) {}
}
