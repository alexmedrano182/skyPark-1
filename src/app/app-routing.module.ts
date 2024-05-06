import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { LoginComponent } from './login/login.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ParkingComponent } from './parking/parking.component';
const routes: Routes = [
  {path:"escritorio",component:EscritorioComponent},
  {path:"login",component:LoginComponent},
  {path:"vehiculos",component:VehiculosComponent},
  {path:"parking",component:ParkingComponent},
  {path:"**", pathMatch:"full",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
