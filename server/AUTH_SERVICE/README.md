# TravelAero's Auth Service 
The Auth Service provides secure user authentication using JWT tokens. It manages user roles and permissions, allowing seamless access control.Passwords are not directly stored in the database,they are encrypted and hence ensure data integrity. It enhances TravelAero's security framework and user experience.

## Setup and Installation :

- Go to `AUTH_SERVICE` and execute `npm install`
- Create a `.env` file in the `AUTH_SERVICE` directory based on file `.envExample` 
- Create a new  file `config.json` inside `src/config` folder with following json
 
```

{
  "development": {
    "username": <MYSQL_LOGIN_USERNAME>,
    "password": <PASSWORD>,
    "database": "AUTH_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
* Go to `AUTH_DB_DEV/src` and execute 
  * `npx sequelize db:create`
  * `npx sequelize db:migrate`
  * `npx sequelize db:seed:all`

- Go to `AUTH_SERVICE` and start the server by `npm start`
- Check the `API Contract` at `http://localhost:{PORT}/authservice/api-docs`
<br>

