// const {Flight} = require('../models/index');
// const {Op} = require("sequelize");

// class FlightRepository {

//     #createFilter(data){
//         let filter = {};
//         if(data.arrivalAirportId) {
//             filter.arrivalAirportId = data.arrivalAirportId;
//         }
//         if(data.departureAirportId) {
//             filter.departureAirportId = data.departureAirportId;
//         }
//         if(data.minPrice && data.maxPrice) {
//             Object.assign(filter,{
//                 [Op.and]: [
//                     { price: {[Op.gte]: data.minPrice} },
//                     { price: {[Op.lte]: data.maxPrice} },
//                  ]
//             })
//         }
//         else if(data.minPrice) {
//             Object.assign(filter, {price: {[Op.gte]: data.minPrice}});
//         } 
//         else if(data.maxPrice) {
//             Object.assign(filter, {price: {[Op.lte]: data.maxPrice}});
//         }
//         return filter;
//     }

//     async createFlight(data) {
//         try {
//             const flight = await Flight.create(data);
//             return flight;
//         } catch (error) {
//             console.log("Flights: Something went wrong in repository layer");
//             throw {error};
//         }
//     }

//     async getFlight(id){
//         try {
//             const flight = await Flight.findByPk(id);
//             return flight; 
//         } catch (error) {
//             console.log("FlightRepository: Something went wrong in repository layer");
//             throw {error};
//         }
//     }

//     async getAllFlights(filter){
//         try {
//             const filterObject = this.#createFilter(filter);
//             const flight = await Flight.findAll({
//                 where: filterObject
//             });
//             return flight;
//         } catch (error) {
//             console.log("FlightRepository: Something went wrong in repository layer");
//             throw {error};
//         }
//     }
// }

// module.exports = FlightRepository;

// /**
//  *  {
//  *      where: {
//  *          arrivalAirportId:2,
//  *          departureAirportId:4,
//  *          price: {[Op.gte]:4000}
//  *      }
//  * }
//  */