import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes.service';
import { FormControl, FormGroup } from '@angular/forms';
import Cliente from '../interfaces/cliente.interface';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent implements OnInit {

  coloresDeFondo: string[] = [];
  posicionesVerdes: number[] = [];
  clienteDatos: any[] = [];


  arrayOfIndexes: number[] = Array.from({ length: 108 }, (_, i) => i + 1);
  formulario: FormGroup;
  clientes: Cliente[];

  constructor(
    private clientesService: ClientesService
  ) {

    this.formulario = new FormGroup({
      lugar: new FormControl(),
      nombre: new FormControl(),
      apellidos: new FormControl(),
      correo: new FormControl(),
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
      correo: "sau@ius.com",
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
      correo: "sau@ius.com",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: false,
      premiumId: "1",
      entrada: "1",
      salida: "2"
    }];
  }


  ngOnInit(): void {

    this.clientesService.getClientes().subscribe(clientes => {
      const valoresCampo: number[] = [];

      this.clientes = clientes;
      console.log(clientes);
      this.clientes.forEach(cliente => {
        // Obtener el valor del campo 'campo' de cada documento y agregarlo al vector
        valoresCampo.push(cliente.lugar);
      });

      console.log(valoresCampo);

      this.posicionesVerdes = valoresCampo;

      this.coloresDeFondo = Array.from({ length: 108 }, (_, i) => {
        // Verificar si la posición actual está en el arreglo de posiciones verdes
        if (valoresCampo.includes(i + 1)) {
          return 'green'; // Si está en la lista, asigna 'green'
        } else {
          return 'white'; // De lo contrario, asigna 'white' u otro color predeterminado
        }
      });


    })

  }

  async obtenerLugares(cliente: Cliente) {

    const valoresCampo: number[] = [];

    // Iterar sobre cada documento en la lista
    this.clientes.forEach(cliente => {
      // Obtener el valor del campo 'campo' de cada documento y agregarlo al vector
      valoresCampo.push(cliente.lugar);
    });

    console.log(valoresCampo);
    //const response = this.clientesService.deleteCliente(cliente);
    //this.clienteDatos = this.clientes.filter(cliente => cliente.id === response.id);

    // Supongamos que tienes un arreglo de posiciones que deben ser verdes
    this.posicionesVerdes = valoresCampo;

    this.coloresDeFondo = Array.from({ length: 108 }, (_, i) => {
      // Verificar si la posición actual está en el arreglo de posiciones verdes
      if (this.posicionesVerdes.includes(i + 1)) {
        return 'green'; // Si está en la lista, asigna 'green'
      } else {
        return 'white'; // De lo contrario, asigna 'white' u otro color predeterminado
      }
    });

  }



}
