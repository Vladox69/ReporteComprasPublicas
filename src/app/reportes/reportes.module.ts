import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaReportesComponent } from './tabla-reportes/tabla-reportes.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    TablaReportesComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    TablaReportesComponent
  ]
})
export class ReportesModule { }
