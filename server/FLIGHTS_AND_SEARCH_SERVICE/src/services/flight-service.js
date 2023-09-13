const CrudService = require("./crud-service");
const { FlightRepository, AirplaneRepository } = require("../repositories/index");
const { compareTime } = require("../utils/compareTime");

class FlightService extends CrudService {
    
    constructor() {
        const flightRepository = new FlightRepository();
        super(flightRepository,"FlightService");
        this.FlightRepository = flightRepository;
        this.AirplaneRepository = new AirplaneRepository();
    }

    async create(data){
        try {
            if(!compareTime(data.departureTime,data.arrivalTime)){
                    throw {error:"Arrival time cannot be before departure"};
            }

            const airplane = await this.AirplaneRepository.get(data.airplaneId);
            const flight = await this.FlightRepository.create({
                ...data, totalSeats:airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("FlightService: Something went wrong at service layer");
            throw {error};
        }
    }

}

module.exports = FlightService;