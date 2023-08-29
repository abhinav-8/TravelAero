# Welcome to Travel Aero

## Project Setup:

### Server

#### Service FlightsAndSearch
- Go to `flightsAndSearch/src` and execute `npm install`
- Create a `.env` file in the `flightsAndSearch` directory based on file `.envExample` 
- Create a new  file `config.json` inside `src/config` folder with following json
 
```

{
  "development": {
    "username": <MYSQL_LOGIN_USERNAME>,
    "password": <PASSWORD>,
    "database": "FlightsAndSearch_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
- Go to `flightsAndSearch/src` and execute `npx sequelize db:create`


## DB Design

![Flight Search Database](src/assets/flightsAndSearch_DB_Design.png)