import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
interface Bus {
  name: string;
  type: string;
  departure: string;
  duration: string;
  fare: number;
  availableSeats: number;
}

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
  imports: [CommonModule]
})
export class BusListComponent implements OnInit {
  // Mock bus data
  busData: { buses: Bus[] } = {
    buses: [
      { name: 'Bus A', type: 'AC', departure: '10:00 AM', duration: '2 hrs', fare: 100, availableSeats: 40 },
      { name: 'Bus B', type: 'Non-AC', departure: '11:00 AM', duration: '3 hrs', fare: 80, availableSeats: 35 },
      { name: 'Bus C', type: 'AC', departure: '01:00 PM', duration: '2.5 hrs', fare: 120, availableSeats: 45 }
    ]
  };
  constructor(private router: Router) {} 

  ngOnInit(): void {
   
    console.log(this.busData.buses); 
  }

  selectBus(bus: Bus): void {
    console.log('Bus selected:', bus);
    this.router.navigate(['/seat-selection'], { state: { selectedBus: bus } });
  }
}
