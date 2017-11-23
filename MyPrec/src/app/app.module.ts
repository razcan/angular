import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ViewEncapsulation } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';
import { ListaCvComponent } from './lista-cv/lista-cv.component';
import { ListaCvdetaliuComponent } from './lista-cvdetaliu/lista-cvdetaliu.component';
import { InputCvComponent } from './input-cv/input-cv.component';
import { SaUploadamComponent } from './sa-uploadam/sa-uploadam.component';
import { Ng2FileInputModule } from 'ng2-file-input';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    Pagina2Component,
    ListaCvComponent,
    ListaCvdetaliuComponent,
    InputCvComponent,
    SaUploadamComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2FileInputModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      {path: 'pagina2',
      component: Pagina2Component},
      {path: 'input-cv',
      component: InputCvComponent},
      {path: 'lista-cv',
      component: ListaCvComponent},
      {path: 'lista-cvdetaliu/:ID',
      component: ListaCvdetaliuComponent},
      {path: 'sa-uploadam',
      component: SaUploadamComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
export const routingComponents =  [InputCvComponent, ListaCvComponent, ListaCvdetaliuComponent, SaUploadamComponent];
