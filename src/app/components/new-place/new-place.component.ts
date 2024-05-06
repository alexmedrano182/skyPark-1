import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.component.html',
  styleUrl: './new-place.component.css'
})
export class NewPlaceComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private clientesService: ClientesService
  ) {
    this.formulario = new FormGroup({
      nombre1: new FormControl(),
      nombre2: new FormControl(),
      apellidoP: new FormControl(),
      apellidoM: new FormControl(),
      placa: new FormControl(),
      marca: new FormControl(),
      modelo: new FormControl(),
      color: new FormControl(),
      isPremium: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.clientesService.addCliente(this.formulario.value);
    console.log(response);
  }

}
