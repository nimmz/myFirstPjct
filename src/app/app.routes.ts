import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';// Import the SearchComponent
import { BusListComponent } from './bus-list/bus-list.component'; // Import BusListComponent
import { SeatSelectionComponent } from './seat-selection/seat-selection.component'; // Import SeatSelect// Import PassengerInformationComponent
import { ReviewComponent } from './review/review.component'; // Import ReviewComponent // Import TicketConfirmationComponent
import { HomeComponent } from './home/home.component';
import { PassengerInfoComponent } from './passenger-info/passenger-info.component';
import { TicketComponent } from './ticket/ticket.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route to SearchComponent
  { path: 'bus-list', component: BusListComponent }, // Route for the Bus List page
  { path: 'seat-selection', component: SeatSelectionComponent }, // Route for seat selection page
  { path: 'passenger-info', component: PassengerInfoComponent }, // Route for passenger info page
  { path: 'review', component: ReviewComponent }, // Route for the review page
  { path: 'ticket-confirmation', component: TicketComponent }, // Route for ticket confirmation
  { path: '**', redirectTo: '' } // Catch-all route for 404 (optional, redirecting to SearchComponent)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Initialize the router with routes
  exports: [RouterModule]  // Export RouterModule to be used in other modules
})
export class AppRoutingModule {}
