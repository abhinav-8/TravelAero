// const {AirplaneRepository,FlightRepository} = require("../repository/index");
// const {compareTime} = require("../utils/compareTime");

// class FlightService {
    
//     constructor(){
//         this.AirplaneRepository = new AirplaneRepository();
//         this.FlightRepository = new FlightRepository();
//     }
    
//     async createFlight(data){
//         try {
//             if(!compareTime(data.departureTime,data.arrivalTime)){
//                     throw {error:"Arrival time cannot be before departure"};
//             }
//             const airplane = await this.AirplaneRepository.getAirplane(data.airplaneId);
//             const flight = await this.FlightRepository.createFlight({
//                 ...data, totalSeats:airplane.capacity
//             });
//             return flight;
//         } catch (error) {
//             console.log("FlightService: Something went wrong at service layer");
//             throw {error};
//         }
//     }

//     async getFlight(flightId) {
//         try {
//             const flight = await this.FlightRepository.getFlight(flightId);
//             return flight;
//         } catch (error) {
//             console.log("FlightService: Something went wrong at service layer");
//             throw {error};
//         }
//     }
    
//     async getAllFlights(filter) {
//         try {
//             const response = await this.FlightRepository.getAllFlights(filter);
//             return response;
//         } catch (error) {
//             console.log("FlightService: Something went wrong at service layer");
//             throw {error};
//         }
//     }
// }

// module.exports = FlightService;