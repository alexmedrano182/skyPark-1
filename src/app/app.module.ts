import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPlaceComponent } from './components/new-place/new-place.component';
import { PlaceListComponent } from './components/place-list/place-list.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { EscritorioComponent } from './escritorio/escritorio.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    NewPlaceComponent,
    PlaceListComponent,
    NavbarComponent,
    LoginComponent,
    EscritorioComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"skypark-af251","appId":"1:940451947201:web:a614bd66bd5bc6d4222a40","storageBucket":"skypark-af251.appspot.com","apiKey":"AIzaSyDEXGUBksLJ0nlhnA4WugUUtEUo2uqPDiY","authDomain":"skypark-af251.firebaseapp.com","messagingSenderId":"940451947201"})),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
