import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  getBuses(searchData: any): Observable<any[]> {
    // Simulating a bus search based on source, destination, and date
    const buses = [
      { name: 'Bus A', type: 'AC', departureTime: '10:00 AM', fare: 500, availableSeats: 20 },
      { name: 'Bus B', type: 'Non-AC', departureTime: '2:00 PM', fare: 300, availableSeats: 30 },
    ];
    return of(buses);
  }
}
