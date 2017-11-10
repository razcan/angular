import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ViewEncapsulation } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina2Component } from './pagina2/pagina2.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent,
    Pagina2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'second-page',
      component: SecondPageComponent},
      {path: 'pagina2',
      component: Pagina2Component},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule {
}
