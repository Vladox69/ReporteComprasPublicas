import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { ReportesModule } from './reportes/reportes.module';
import { GraficosModule } from './graficos/graficos.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsModule,
    ReportesModule,
    GraficosModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    MaterialModule,
    ComponentsModule
  ]
})
export class AppModule { }
