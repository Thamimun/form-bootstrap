import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import {httpService}from './http.service'
import {DataService}from './global.service'
import { HttpClientModule,HttpClientXsrfModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [httpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
