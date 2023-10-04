const express = require('express');
const bodyParser = require('body-parser');

const { PORT, REMINDER_BINDING_KEY } = require('./config/serverConfig');
const { createChannel, subscribeMessage } = require('./utils/messageQueue.js');

const EmailService = require('./services/email-service');

const jobs = require('./utils/job');

const NotificationController = require('./controllers/notification-controller');

const setupAndStartServer = async  () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.post('/api/v1/notifications', NotificationController.create);
    
    const channel = await createChannel();
    await subscribeMessage(channel, EmailService.subscribeEvents, REMINDER_BINDING_KEY);
    app.post('/api/v1/notifications',NotificationController.create);

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`)
        jobs();
    });
}

setupAndStartServer();