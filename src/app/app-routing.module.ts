import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { LoginComponent } from './components/login/login.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';
import { ReporteComponent } from './reporte/reporte.component';
import { RegisterComponent } from './components/register/register.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { ParkingComponent } from './parking/parking.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/escritorio' },
  //{path:"escritorio",component:EscritorioComponent},
  {
    path: 'escritorio',
    component: EscritorioComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  //{path:"login",component:LoginComponent},
  {
    path: 'vehiculos',
    component: VehiculosComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  //{path:"vehiculos",component:VehiculosComponent},
  {
    path: 'reporte',
    component: ReporteComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'parking',
    component: ParkingComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/parking']))
  },
  //{path:"reporte",component:ReporteComponent},
  {path:"**", pathMatch:"full",redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
