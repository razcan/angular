import { Component, OnInit } from '@angular/core';
import { FileUploadModule, FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileUploaderModule } from '@uniprank/ng2-file-uploader';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './../app.component';
import { RouterModule, Routes } from '@angular/router';
import { Http } from '@angular/http';
import { HttpParams, HttpClient } from '@angular/common/http';

const URL = 'http://localhost:3000/uploadFile';

@Component({
  selector: 'app-sa-uplodam',
  templateUrl: './sa-uplodam.component.html',
  styleUrls: ['./sa-uplodam.component.css']
})


export class SaUplodamComponent implements OnInit {
  URL: any;
  constructor(private http: Http) {
  }


  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver: Boolean = false;
  public hasAnotherDropZoneOver: Boolean = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
  AfiseazaFisier() {
    console.log(this.uploader.queue);
  }
  handleSubmit() {
    this.http.post('http://localhost:3000/uploadFile', this.uploader.queue).subscribe((res) => {

    const result = res.json;
    console.log(result);

  });
  }
  ngOnInit() {
  }

}
