import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface BookingDetails {
  selectedBus: {
    name: string;
    type: string;
    departure: string;
    duration: string;
    fare: number;
  };
  passengers: {
    name: string;
    age: number;
    gender: string;
    seatNumber: number;
  }[];
  contactDetails: {
    phone: string;
    email: string;
  };
  totalFare: number;
}

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class TicketComponent implements OnInit {
  
  bookingDetails: BookingDetails | undefined;
  ticketId: string = 'TKT-' + new Date().getTime();

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = history.state;
    if (navigation && navigation.bookingDetails) {
      this.bookingDetails = navigation.bookingDetails;
    } else {
      this.router.navigate(['/']);
    }
  }

  downloadTicket() {

  }

  printTicket() {

  }
}