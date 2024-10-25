Seat Ticket Reservation System
Project Overview
This is a Seat Ticket Reservation System for a single coach in a train with 80 seats. The coach has 7 seats per row, except for the last row, which has only 3 seats. This project focuses on allowing users to reserve seats in an optimal way based on availability and proximity.

Problem Description
The coach consists of 80 seats arranged in 7 seats per row, except for the last row which has 3 seats.
A user can reserve up to 7 seats at once.
The system will prioritize booking all seats in the same row when possible.
If seats in one row are not available, it will allocate seats as close as possible to each other.
Users can book seats continuously until all seats are reserved.
No login functionality is required.

Functionality
Inputs
The user inputs the number of seats they want to reserve (e.g., 1, 4, 7, etc.).
Outputs
The system displays the seat numbers that have been successfully booked for the user.
A visual representation (via numbers, colors, etc.) shows the availability status of all seats in the coach.
Conditions

Single booking: A user can reserve a maximum of 7 seats at a time.
Row priority: If possible, seats should be booked in the same row.
Proximity booking: If a row cannot accommodate the full number of seats, the system books seats as close together as possible.
No login required: The app doesn’t include any login feature for users.
Database Structure
Here is the proposed database schema for seat reservations:

Table Name: reservations
id (Primary Key)
seat_number (INT) – Unique seat number
status (VARCHAR) – Available, Reserved
user_id (Optional, for tracking multiple users if needed in the future)
reservation_date (DATETIME)
Hosting
The project is hosted on [Platform Name (e.g., Heroku, Vercel)] and can be accessed via this URL: [Link to Hosted Project].
