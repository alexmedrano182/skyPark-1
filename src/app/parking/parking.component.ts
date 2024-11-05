import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {
  stock = [
    { componente: 'Glóbulos Rojos', grupoSanguineo: 'A', rh: 'Positivo', cantidad: 10, fechaCaducidad: '2024-11-30' },
    { componente: 'Plasma', grupoSanguineo: 'O', rh: 'Negativo', cantidad: 5, fechaCaducidad: '2024-12-15' },
    { componente: 'Plaquetas', grupoSanguineo: 'AB', rh: 'Positivo', cantidad: 3, fechaCaducidad: '2024-11-10' },
    { componente: 'Paquete Globular', grupoSanguineo: 'B', rh: 'Negativo', cantidad: 7, fechaCaducidad: '2024-11-25' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
