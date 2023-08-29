const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');
const setupServer = async () => {
    
    //Create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    // If any incoming request has /api,it's gonna map to ApiRoutes
    app.use('/api', ApiRoutes);

    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
    });
}

setupServer(); 