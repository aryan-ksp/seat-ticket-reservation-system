import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    templateUrl: './app.component.html',
      styleUrls: ['./app.component.css']
      })
      export class AppComponent {
        name = 'Angular';
          
            totalSeats = 80;
              seatsPerRow = 7;
                seats = Array(this.totalSeats).fill(false); // false means available
                  bookedSeats = [5, 6, 7, 8]; // Example of already booked seats
                    reservedSeats: number[] = [];
                      numSeats: number = 1; // Default number of seats to reserve
                        reserveMessage: string = '';

                          constructor() {
                              this.initializeSeats();
                                }

                                  initializeSeats() {
                                      this.bookedSeats.forEach(seat => {
                                            this.seats[seat - 1] = true; // Mark booked seats
                                                });
                                                  }

                                                    reserveSeats(numSeats: number): string {
                                                        if (numSeats < 1 || numSeats > 7) {
                                                              this.reserveMessage = 'You can reserve between 1 and 7 seats.';
                                                                    return this.reserveMessage;
                                                                        }

                                                                            let booked = [];
                                                                                for (let i = 0; i < this.totalSeats; i++) {
                                                                                      if (!this.seats[i]) { // Check for available seats
                                                                                              if (booked.length < numSeats) {
                                                                                                        booked.push(i + 1);
                                                                                                                  this.seats[i] = true; // Mark as booked
                                                                                                                          } else {
                                                                                                                                    break; // Exit loop if we have enough booked
                                                                                                                                            }
                                                                                                                                                  } else {
                                                                                                                                                          booked = []; // Reset if a booked seat is found
                                                                                                                                                                }
                                                                                                                                                                    }

                                                                                                                                                                        if (booked.length === numSeats) {
                                                                                                                                                                              this.reservedSeats = booked;
                                                                                                                                                                                    this.reserveMessage = `Successfully booked seats: ${booked.join(', ')}`;
                                                                                                                                                                                        } else {
                                                                                                                                                                                              this.reserveMessage = 'Not enough adjacent seats available.';
                                                                                                                                                                                                  }
                                                                                                                                                                                                      return this.reserveMessage;
                                                                                                                                                                                                        }
                                                                                                                                                                                                        }
                                                                                                                                                                                                        