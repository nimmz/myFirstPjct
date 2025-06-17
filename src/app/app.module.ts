import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TicketComponent } from './ticket/ticket.component';
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [AppComponent, HomeComponent, TicketComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Import routing module
    FormsModule, // Import FormsModule to enable ngModel
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
