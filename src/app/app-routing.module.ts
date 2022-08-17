import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaReportesComponent } from './reportes/tabla-reportes/tabla-reportes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'reportes', component: TablaReportesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
