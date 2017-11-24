import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
@Component({
  selector: 'app-sa-uplodam',
  templateUrl: './sa-uplodam.component.html',
  styleUrls: ['./sa-uplodam.component.css']
})


export class SaUplodamComponent implements OnInit {

  constructor() { }

  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: Boolean = false;
  public hasAnotherDropZoneOver: Boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  ngOnInit() {
  }

}
