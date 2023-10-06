# TravelAero: Flight Booking Platform

TravelAero is a cutting-edge flight booking platform having built it's backend on Node.js (Express.js). This application leverages microservices architecture and API Gateway for efficient communication. Users can seamlessly search for flights, book tickets, and receive email notifications. The platform includes robust authentication mechanisms and exclusive admin functionalities for managing cities and flight details.


## Features Implemented

- **Flights Service**: 
    - Flight search based on user preferences.
    - Flight creation, deletion, updating details for admin.

- **Auth Service**:
    - JWT based user authentication.
    - Roles for normal users and admin.

- **Boking Service**:
    - Create ,get details and cancel booking by authorized users.

- **Reminder Service**:
    - Used `Message Queues` ensuring asynchronous and efficient communication with booking service.
    - Sending emails to users after booking and reminding them 24/48 hrs before their flight departure time.

- **Api Gateway**:
    - Manages API requests and directs them to appropriate microservices, enhancing modularity.
    - Implements API rate limiting based on IP addresses (15 requests in 2 minutes) for fairness and performance.

- Implemented a `RESTful API` architecture, adhering to standard HTTP methods and principles. 
- Utilizes **MySQL database** for efficient storage and retrieval.
- Implements secure database practices to `protect user data`.
- Robust **error handling** to ensure smooth user experience and application stability.
- Logging mechanisms for tracking application activities and debugging.
- **API Contract**:
    - The API structure is defined in swagger.yaml in the respective services' utils directories. It outlines endpoints, payloads, and responses.


## Setup

- clone the repo - `git clone git@github.com:abhinav-8/TravelAero.git`

> Server
- Read the README.md for the respective services' setup and installation , find all the service inside `server` directory



