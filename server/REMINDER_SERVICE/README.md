# TravelAero's Reminder Service 
TravelAero's Reminder Service ensures timely email notifications to users. It utilizes message queues for asynchronous communication and integrates cron jobs for scheduled reminders, enhancing user engagement.

## Setup and Installation :

- Go to `REMINDER_SERVICE` and execute `npm install`
- Create a `.env` file in the `REMINDER_SERVICE` directory based on file `.envExample` 
- Create a new  file `config.json` inside `src/config` folder with following json
 
```

{
  "development": {
    "username": <MYSQL_LOGIN_USERNAME>,
    "password": <PASSWORD>,
    "database": "REMINDER_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```
* Go to `REMINDER_SERVICE/src` and execute 
  * `npx sequelize db:create`
  * `npx sequelize db:migrate`

- Setup RabbitMQ on your system based on your OS,for linux checkout [here](https://linux.how2shout.com/how-to-install-rabbitmq-server-on-ubuntu-20-04-lts/)
- Go to `REMINDER_SERVICE` and start the server by `npm start`

<br>

## Why Using Message Queue? :

- To avoid bottleneck i.e. to manage the consumption rate of Reminder Service.
- Sending reminder mails to user is important but must not be immediate,so even if Reminder Service faces downtime,asynchronous communication using Message Ques handles it.
