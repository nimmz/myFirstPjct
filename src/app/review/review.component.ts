import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class ReviewComponent implements OnInit {
  bookingDetails: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const navigation = history.state;
    if (navigation && navigation.bookingDetails) {
      this.bookingDetails = navigation.bookingDetails;
    }
  }

  confirmBooking(): void {
    this.router.navigate(['/ticket-confirmation'], { 
      state: { 
        bookingDetails: this.bookingDetails 
      }
    });
  }
}