const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require("./config/serverConfig");
const { createChannel } = require('./utils/messageQueue');
const apiRoutes = require('./routes/index');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swaggerConfig"); 

const setupServer = async() => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use("/bookingservice/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    const channel = await createChannel();
    app.use('/bookingservice/api', apiRoutes(channel));
    
    app.listen(PORT ,() =>{
        console.log(`Server started at port ${PORT}`);
        // db.sequelize.sync({alter:true});
    });

}

setupServer();
