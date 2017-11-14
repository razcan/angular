import { Component, OnInit, HostBinding } from '@angular/core';
import { ViewEncapsulation } from '@angular/core' ;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './../app.component';
import { RouterModule, Routes, Router } from '@angular/router';
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
  test5: any;
  rezultat: number;
  NumarInt: number ;
  fix: number;

test(NumarInt: number) {
  const fix = 5 ;
  const testRez = fix + NumarInt;
  console.log(testRez);
  return testRez ;

 }
 onSelect(ID) {
  console.log('test');
  this.router.navigate(['/lista-cvdetaliu', ID.ID]);
 }

  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((res) => {
    const result = res.json();
    this.result = result;
  }
);
}

constructor(private http: Http, private router: Router) {
  this.test5 = 55;
}
}
