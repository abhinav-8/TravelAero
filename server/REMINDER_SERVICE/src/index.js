const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const { sendBasicEmail } = require('./services/email-service');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`)

        sendBasicEmail(
            '*Support TravelAero*',
            'abhinavkumar.ak9@gmail.com',
            'This is a testing email',
            'hello man'
        )
    });
}

setupAndStartServer();