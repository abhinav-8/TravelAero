const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, async () => {
        console.log(`Server started at port ${PORT}`)

        const response = await sendBasicEmail(
            'Support TravelAero <support@travelaero.com>',
            'abhinavkumar.ak9@gmail.com',
            'This is a testing email',
            'Testing Async'
        );
        console.log(response);
    });
}

setupAndStartServer();