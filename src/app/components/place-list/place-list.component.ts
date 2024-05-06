import { Component, OnInit } from '@angular/core';
import Cliente from '../../interfaces/cliente.interface';
import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clientesService: ClientesService
  ) {
    this.clientes = [{
      lugar: 1,
      nombre: "Dui",
      apellidos: "Gutierres",
      correo: "sau@ius.com",
      placa: "AB-234-024",
      marca: "Chevryolet",
      modelo: "Averlo",
      color: "Transparente",
      isPremium: true,
      premiumId: "",
      entrada: "1",
      salida: "2"
    }];
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    })
  }

  async onClickDelete(cliente: Cliente) {
    const response = await this.clientesService.deleteCliente(cliente);
    console.log(response);
  }

}