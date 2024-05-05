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

  mostrarPopup: boolean = false;
  hSalida = ""; 

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
      premiumId: new FormControl(),
      entrada: new FormControl(),
      salida: new FormControl()
    })

    this.clientes = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1",
      entrada: "1",
      salida: "2"
    }];

    this.clienteDatos = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1",
      entrada: "1",
      salida: "2"
    }];

    this.clientesNoPremium = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1",
      entrada: "1",
      salida: "2"
    }];

    this.clientesPremium = [{
      nombre: "Dui",
      apellidos: "Gutierres",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: true,
      premiumId: "1",
      entrada: "1",
      salida: "2"
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
    const fechaHoraActual = new Date();
    const fechaFormateada = this.formatearFecha(fechaHoraActual);
    const horaFormateada = this.formatearHora(fechaHoraActual);
    console.log('La fecha y hora actual es:', fechaFormateada, horaFormateada);
    console.log('La fecha y hora actual es:', fechaHoraActual);
    this.formulario.value.entrada = horaFormateada;
    const response = await this.clientesService.addCliente(this.formulario.value);
    console.log(response);
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clientesService.deleteCliente(cliente);
    this.clienteDatos = await this.clientes.filter(cliente => cliente.id === response.id);
    console.log(this.clienteDatos);
    const fechaHoraActual = new Date();
    const fechaFormateada = this.formatearFecha(fechaHoraActual);
    const horaFormateada = this.formatearHora(fechaHoraActual);
    this.hSalida = horaFormateada;
    this.mostrarPopup = true;
  }

  ocultarPopupFunc(): void {
      this.mostrarPopup = false;
  }

  cobrar(cliente: Cliente) {
    
  }

  imprimirTicket(cliente: Cliente) {
    
  }

  obtenerFechaHoraActual(): void {
    const fechaHoraActual = new Date();
    console.log('La fecha y hora actual es:', fechaHoraActual);
    // Aquí puedes hacer lo que necesites con la fecha y hora actual
  }

  private formatearFecha(fecha: Date): string {
    const dia = fecha.getDate().toString().padStart(2, '0');
    const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    const año = fecha.getFullYear();
    return `${dia}/${mes}/${año}`;
  }

  private formatearHora(fecha: Date): string {
    const hora = fecha.getHours().toString().padStart(2, '0');
    const minutos = fecha.getMinutes().toString().padStart(2, '0');
    const segundos = fecha.getSeconds().toString().padStart(2, '0');
    return `${hora}:${minutos}:${segundos}`;
  }


}
