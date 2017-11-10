import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core' ;
import { Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.component.html',
  styleUrls: ['./pagina2.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class Pagina2Component implements OnInit {
  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((res) => {
    const result = res.json();
    this.result = result;
  });
  }
  constructor(private http: Http) {}
  result: any;
}