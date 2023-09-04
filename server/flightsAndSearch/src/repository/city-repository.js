const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity(cities) {
    try {
      const city = await City.bulkCreate(cities);
      return city;
    } catch (error) {
      console.log("FlightsAndSearch: Something went wrong in repository layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("FlightsAndSearch: Something went wrong in repository layer");
      throw { error };
    }
  }

  async updateCity(cityId, data) {
    try {
      // This approach doesn't return updated object
      //In pgsql we can use returning:true for same issue
      // const city = await City.update(data,{
      //     where:{
      //         id:cityId
      //     }
      // });
      //In mysql we can use following approach to get updated object
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("FlightsAndSearch: Something went wrong in repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("FlightsAndSearch: Something went wrong in repository layer");
      throw { error };
    }
  }

  async getAllCities(filter) {
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
      console.log("FlightsAndSearch: Something went wrong in repository layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
