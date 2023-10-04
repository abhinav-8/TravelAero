const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const ApiRoutes = require('./routes/index');
// const db = require("./models/index");
// const {User,Role} = require("./models/index");
const setupServer = async() => {

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/authservice/api',ApiRoutes);
    app.listen(PORT ,async()=>{
        console.log(`Server started at port ${PORT}`);
        // await db.sequelize.sync({alter:true});
        // const u1 = await User.findByPk(24);
        // const r1 = await Role.findByPk(1);
        // u1.addRole(r1);
    });

}

setupServer();

