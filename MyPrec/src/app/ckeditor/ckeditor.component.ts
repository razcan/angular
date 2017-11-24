import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ckeditor',
  templateUrl: './ckeditor.component.html',
  styleUrls: ['./ckeditor.component.css']
})
export class CkeditorComponent implements OnInit {
  ckeditorContent: string;

  content= 'this is a text with &lt';

  constructor() {
    this.ckeditorContent = `<p>  Test </p>`;
  }

  ngOnInit() {
  }

}
