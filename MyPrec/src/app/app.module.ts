import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ViewEncapsulation } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    SecondPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  nume= 'Mustata';
  prenume = 'Razvan';
}
