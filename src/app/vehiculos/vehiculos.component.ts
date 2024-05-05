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
  

  clientesNoPremium: any[] = [];
  clientesPremium: any[] = [];
  clienteDatos: any[] = [];


  
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
      isPremium: new FormControl(),
      premiumId: new FormControl()
    })

    this.clientes = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1"
    }];

    this.clienteDatos = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1"
    }];

    this.clientesNoPremium = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1"
    }];

    this.clientesPremium = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: true,
      premiumId: "1"
    }];
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      console.log(clientes);
      this.clientesNoPremium = clientes.filter(cliente => cliente.isPremium === false || cliente.isPremium === null);
      this.clientesPremium = clientes.filter(cliente => cliente.isPremium === true);
    })
  }

  async onSubmit() {
    console.log(this.formulario.value)
    //this.formulario.value.nombre = "hola";
    const response = await this.clientesService.addCliente(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clientesService.deleteCliente(cliente);
    this.clienteDatos = await this.clientes.filter(cliente => cliente.id === response.id);
    console.log(this.clienteDatos);
  }

}
