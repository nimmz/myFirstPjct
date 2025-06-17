import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../bus.service';
import { CommonModule } from '@angular/common'; // Import CommonModule for common directives like ngIf, ngFor
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, FormsModule],
})
export class HomeComponent {
  searchData = { source: '', destination: '', date: '' };

  constructor(private busService: BusService, private router: Router) {}
  onSearch() {
    if (this.searchData.source && this.searchData.destination && this.searchData.date) {
      this.router.navigate(['/bus-list'], { state: { searchData: this.searchData } });
    } else {
      alert('Please fill in all the fields.');
    }
  }
}
