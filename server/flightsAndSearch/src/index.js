const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const CityRepository = require('./repository/city');

const setupServer = async () => {
    
    //Create express object
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,() => {
        console.log(`Server started at ${PORT}`);
        const repo = new CityRepository();
        const city = repo.createCity({name:"fzd"});
        // console.log(city);
    });
}

setupServer(); 