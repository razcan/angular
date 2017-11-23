import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Ng2FileInputService, Ng2FileInputAction } from 'ng2-file-input';
import { NgZone } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2FileInputModule } from 'ng2-file-input';
import { UPLOAD_DIRECTIVES } from 'ng2-file-uploader/ng2-file-uploader';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@NgModule({
  imports: [BrowserModule, Ng2FileInputModule.forRoot()],
  declarations: [SaUploadamComponent]
})

@Component({
  selector: 'app-sa-uploadam',
  templateUrl: './sa-uploadam.component.html',
  styleUrls: ['./sa-uploadam.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class SaUploadamComponent {
  isUploadBtn: Boolean = true;
  debugger;
  map: any;
  constructor(private http: Http) { }

  fileChange(event) {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      const formData: FormData = new FormData();
      console.log(file.name);
      // formData.append('http://localhost:3000/uploadFile', file, file.name);
      // const headers = new Headers();

      // const options = new RequestOptions({ headers: headers });
      // const apiUrl1 = 'http://localhost:3000/uploadFile';
      // this.http.post(apiUrl1, file, options)
      // .map(res => res.json())
      // .catch(error => Observable.throw(error))
      // .subscribe(
      // data => console.log('success'),
      // error => console.log(error)
      // );
    }
    // window.location.reload();
  }
}
