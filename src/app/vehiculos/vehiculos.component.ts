import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  hEntrada = "";
  hSalida = ""; 
  tarifaFinal = 0;
  tarifaFinalPago = 0;

  valorCostoPago: number = 0;

  valorInput: number = 0;

  valorCodigo: string = "";
  isDescuento = false;


  constructor(
    private clientesService: ClientesService
  ) {
    this.formulario = new FormGroup({
      lugar: new FormControl(),
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
      lugar: 1,
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
      lugar: 1,
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
      lugar: 1,
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
      lugar: 1,
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
    const horaInicio = this.convertirStringAHora(cliente.entrada);
    const horaFin = this.convertirStringAHora(this.hSalida);

    // Calcula la diferencia de tiempo en milisegundos
    const diferenciaMs = horaFin.getTime() - horaInicio.getTime();

    // Convierte la diferencia de tiempo de milisegundos a horas
    const diferenciaHoras = diferenciaMs / (1000 * 60 * 60);

    this.tarifaFinal = Math.floor((diferenciaHoras*15) / 0.5) * 0.5; // Redondear al intervalo más cercano
    this.tarifaFinalPago = this.tarifaFinal;
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

  private convertirStringAHora(horaString: string): Date {
    const partesHora = horaString.split(':');
    const hora = parseInt(partesHora[0], 10);
    const minutos = parseInt(partesHora[1], 10);
    const segundos = parseInt(partesHora[2], 10);

    return new Date(0, 0, 0, hora, minutos, segundos); // Año y mes 0 representan la fecha base
  }

  onCostoPagoInputChange(valor: number): void {
    // Manejar el evento de cambio en tiempo real
    console.log('Valor actual del input:', valor);
    this.tarifaFinalPago = valor - this.tarifaFinal;

    // Se puede llamar a una función u otro método aquí para manejar el cambio en tiempo real :D
  }

  onCodigoInputChange(valorCodigo: string): void {
    // Manejar el evento de cambio en tiempo real
    console.log('Valor actual del input:', valorCodigo);
    if (this.valorCodigo == "iskrispy8742" && this.isDescuento == false)
      {
        this.tarifaFinalPago = Math.floor((this.tarifaFinalPago * 0.75) / 0.5) * 0.5; // Redondear al intervalo más cercano
        this.isDescuento = true;
      }

    // Se puede llamar a una función u otro método aquí para manejar el cambio en tiempo real :D
  }

}
