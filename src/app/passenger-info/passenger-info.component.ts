import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

interface Passenger {
  name: string;
  age: number;
  gender: string;
  seatNumber: number;
}

@Component({
  selector: 'app-passenger-info',
  templateUrl: './passenger-info.component.html',
  styleUrls: ['./passenger-info.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class PassengerInfoComponent implements OnInit {
  selectedSeats: any[] = [];
  selectedBus: any;
  passengerForms: FormGroup[] = [];
  contactNumber: string = '';
  email: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    const navigation = history.state;
    if (navigation) {
      this.selectedSeats = navigation.selectedSeats || [];
      this.selectedBus = navigation.selectedBus;
      this.initializeForms();
    }
  }

  initializeForms(): void {
    this.passengerForms = this.selectedSeats.map(() => 
      this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        age: ['', [Validators.required, Validators.min(1)]],
        gender: ['', Validators.required]
      })
    );
  }

  onSubmit(): void {
    const isFormsValid = this.passengerForms.every(form => form.valid);
    const isContactValid = this.contactNumber && this.email;

    if (!isFormsValid || !isContactValid) {
      alert('Please fill all required fields correctly');
      return;
    }

    const passengers: Passenger[] = this.passengerForms.map((form, index) => ({
      ...form.value,
      seatNumber: this.selectedSeats[index].seatNumber
    }));

    const bookingDetails = {
      selectedBus: this.selectedBus,
      passengers: passengers,
      contactDetails: {
        phone: this.contactNumber,
        email: this.email
      },
      totalFare: this.selectedBus.fare * this.selectedSeats.length
    };

    this.router.navigate(['/review'], { state: { bookingDetails } });
  }
}