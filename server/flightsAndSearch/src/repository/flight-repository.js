const CrudRepository = require("./crud-repository");
const { Flight } = require("../models/index");
const { Op } = require("sequelize");

class FlightRepository extends CrudRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice) {
            Object.assign(filter,{
                [Op.and]: [
                    { price: {[Op.gte]: data.minPrice} },
                    { price: {[Op.lte]: data.maxPrice} },
                 ]
            })
        }
        else if(data.minPrice) {
            Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
        } 
        else if(data.maxPrice) {
            Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
        }
        return filter;
    }

    constructor() {
        super(Flight,"FlightRepository");
    }
    
    async getAll(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flight.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("FlightRepository: Something went wrong in repository layer");
            throw {error};
        }
    }
}

module.exports = FlightRepository;

/**
 *  {
 *      where: {
 *          arrivalAirportId:2,
 *          departureAirportId:4,
 *          price: {[Op.gte]:4000}
 *      }
 * }
 */