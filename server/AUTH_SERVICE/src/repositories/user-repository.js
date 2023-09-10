const { User } = require("../models/index");

class UserRepository {

    async create(data) {
        try {
            const user = await User.create(data);
            return user;    
        } catch (error) {
            console.log("UserRepository: Something went wrong at repository layer");
            throw {error};
        }
    }

    async destroy(userId){
        try {
            await User.destroy({
                where:{
                    id: userId
                }
            });
            return true;
        } catch (error) {
            console.log("UserRepository: Something went wrong at repository layer");
            throw {error};            
        }
    }

    async get(userId){
        try {
            const user = await User.findByPk(userId, {
                attributes: ['email','id'],
            });
            return user;
        } catch(error) {
            console.log("UserRepository: Something went wrong at repository layer");
            throw {error};
        }
    }
}

module.exports = UserRepository;
