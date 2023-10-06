# TravelAero's Booking Service 
TravelAero's Booking Service facilitates users in creating, retrieving, and cancelling flight bookings. It integrates message queues to communicate with Reminder Service to send immediate mails after Flight Booking and creating a notification/reminder ticket for future.

## Setup and Installation :

- Go to `BOOKING_SERVICE` and execute `npm install`
- Create a `.env` file in the `BOOKING_SERVICE` directory based on file `.envExample` 
- Create a new  file `config.json` inside `src/config` folder with following json
 
```

{
  "development": {
    "username": <MYSQL_LOGIN_USERNAME>,
    "password": <PASSWORD>,
    "database": "BOOKING_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
* Go to `BOOKING_SERVICE/src` and execute 
  * `npx sequelize db:create`
  * `npx sequelize db:migrate`

- Go to `BOOKING_SERVICE` and start the server by `npm start`
- Check the `API Contract` at `http://localhost:{PORT}/bookingservice/api-docs`
<br>
