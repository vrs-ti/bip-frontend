import { BeneficioService } from './services/beneficio.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule}   from  '@angular/material/toolbar';
import {MatInputModule}   from  '@angular/material/input';

import {MatTabsModule}   from  '@angular/material/tabs';
import {MatTableModule}   from  '@angular/material/table';
import {MatIconModule}   from  '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BeneficioComponent } from './beneficio/beneficio.component';
import { BeneficioModule } from "./beneficio/beneficio.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    BrowserAnimationsModule,
    BeneficioModule
],
  providers: [
    BeneficioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
