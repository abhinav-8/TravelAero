const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require("./config/serverConfig");
const { createChannel } = require('./utils/messageQueue');
const apiRoutes = require('./routes/index');
// const db = require('./models/index');
const setupServer = async() => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    const channel = await createChannel();
    app.use('/api', apiRoutes(channel));
    
    app.listen(PORT ,() =>{
        console.log(`Server started at port ${PORT}`);
        // db.sequelize.sync({alter:true});
    });

}

setupServer();
