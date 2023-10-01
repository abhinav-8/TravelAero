const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const { createChannel } = require('./utils/messageQueue.js');

// const { sendBasicEmail } = require('./services/email-service');

const jobs = require('./utils/job');

const NotificationController = require('./controllers/notification-controller');

const setupAndStartServer = async  () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.post('/api/v1/notifications', NotificationController.create);
    
    const channel = await createChannel();
    app.post('/api/v1/notifications',NotificationController.create);

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`)
        jobs();
        // const response = await sendBasicEmail(
        //     'Support TravelAero <support@travelaero.com>',
        //     'abhinavkumar.ak9@gmail.com',
        //     'This is a testing email',
        //     'Testing Async'
        // );
        // console.log(response);
    });
}

setupAndStartServer();