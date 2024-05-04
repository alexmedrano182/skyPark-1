import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import Cliente from '../interfaces/cliente.interface';
import { ClientesService } from '../services/clientes.service';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrl: './vehiculos.component.css'
})
export class VehiculosComponent implements OnInit {

  formulario: FormGroup;
  clientes: Cliente[];


  
  constructor(
    private clientesService: ClientesService
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellidos: new FormControl(),
      placa: new FormControl(),
      marca: new FormControl(),
      modelo: new FormControl(),
      color: new FormControl(),
      isPremium: new FormControl()
    })

    this.clientes = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: true
    }];
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  async onSubmit() {
    console.log(this.formulario.value)
    const response = await this.clientesService.addCliente(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clientesService.deleteCliente(cliente);
    console.log(response);
  }

}
