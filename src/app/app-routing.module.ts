import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { LoginComponent } from './login/login.component';
import { ReporteComponent } from './reporte/reporte.component';

const routes: Routes = [
  {path:"escritorio",component:EscritorioComponent},
  {path:"login",component:LoginComponent},
  {path:"reporte",component:ReporteComponent},
  {path:"**", pathMatch:"full",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
