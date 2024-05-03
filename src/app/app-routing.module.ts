import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { ReporteComponent } from './reporte/reporte.component';
=======
import { VehiculosComponent } from './vehiculos/vehiculos.component';
>>>>>>> origin/Gonzalo1

const routes: Routes = [
  {path:"escritorio",component:EscritorioComponent},
  {path:"login",component:LoginComponent},
<<<<<<< HEAD
  {path:"reporte",component:ReporteComponent},
=======
  {path:"vehiculos",component:VehiculosComponent},
>>>>>>> origin/Gonzalo1
  {path:"**", pathMatch:"full",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
