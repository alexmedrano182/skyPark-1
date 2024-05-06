import { Component } from '@angular/core';

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrl: './parking.component.css'
})
export class ParkingComponent {
  arrayOfIndexes: number[] = Array.from({length: 108}, (_, i) => i + 1);
}
