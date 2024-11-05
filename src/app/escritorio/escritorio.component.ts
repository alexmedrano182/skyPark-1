import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-escritorio',
  templateUrl: './escritorio.component.html',
  styleUrls: ['./escritorio.component.css']
})
export class EscritorioComponent {

  formRegistro: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.formRegistro = new FormGroup({
      nombre: new FormControl(),
      edad: new FormControl(),
      fechaNacimiento: new FormControl(),
      expediente: new FormControl(),
      laboratorios: new FormControl(),
      nombreMedico: new FormControl()
    });
  }

  onSubmit() {
    console.log(this.formRegistro.value);
    // Aquí podrías agregar la lógica para enviar los datos al servicio
  }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}
