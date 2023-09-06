const CrudRepository = require("./crud-repository");
const { City } = require("../models/index");
const { Op } = require("sequelize");

/**
 * Model.create() is a static method provided by Sequelize to insert a new record into the `Model` table in your database
 * We don't need to create an instance of the `Model` class to use this method
 * Reference: https://github.com/sequelize/sequelize/tree/main/packages/core/src/model.js  
 */

class CityRepository extends CrudRepository {
    constructor() {
        super(City);
    }
    async create(data) {
        try {
          const city = await City.bulkCreate(data);
          return city;
        } catch (error) {
          console.log("CityRepository: Something went wrong in repository layer");
          throw { error };
        }
    }
    async getAll(filter) {
        //Filter can be empty
        try {
          if (filter.name) {
            console.log(filter);
            const cities = await City.findAll({
              where: {
                name: {
                  [Op.startsWith]: filter.name,
                },
              },
            });
            return cities;
          }
          const cities = await City.findAll();
          return cities;
        } catch (error) {
          console.log("CityRepository: Something went wrong in repository layer");
          throw { error };
        }
    }
}

module.exports = CityRepository;