import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Seat {
  seatNumber: number;
  available: boolean;
}

interface Bus {
  name: string;
  type: string;
  departure: string;
  duration: string;
  fare: number;
  availableSeats: number;
}

@Component({
  selector: 'app-seat-selection',
  templateUrl: './seat-selection.component.html',
  styleUrls: ['./seat-selection.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SeatSelectionComponent implements OnInit {
  selectedBus: Bus | undefined;
  seats: Seat[] = [];
  selectedSeats: Seat[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = history.state;
    if (navigation && navigation.selectedBus) {
      this.selectedBus = navigation.selectedBus;
      this.initializeSeats();
    } else {
      this.router.navigate(['/']);
    }
  }

  initializeSeats(): void {
    // Create 24 seats (6 rows × 4 seats)
    for (let i = 1; i <= 24; i++) {
      this.seats.push({
        seatNumber: i,
        available: Math.random() > 0.3 // 70% chance of being available
      });
    }
  }

  selectSeat(seat: Seat): void {
    if (!seat.available) return;

    const index = this.selectedSeats.indexOf(seat);
    if (index === -1) {
      this.selectedSeats.push(seat);
    } else {
      this.selectedSeats.splice(index, 1);
    }
  }

  isSelected(seat: Seat): boolean {
    return this.selectedSeats.includes(seat);
  }

  getSelectedSeatNumbers(): string {
    return this.selectedSeats
      .map(seat => seat.seatNumber)
      .sort((a, b) => a - b)
      .join(', ');
  }

  proceed(): void {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat!');
      return;
    }

    this.router.navigate(['/passenger-info'], { 
      state: { 
        selectedSeats: this.selectedSeats,
        selectedBus: this.selectedBus 
      }
    });
  }
}