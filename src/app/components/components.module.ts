import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MaterialModule } from '../material/material.module';
import { DateFormComponent } from './date-form/date-form.component';



@NgModule({
  declarations: [
    SidenavComponent,
    DateFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SidenavComponent,
  ]
})
export class ComponentsModule { }
