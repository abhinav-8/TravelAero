const CrudService = require("./crud-service");
const { AirportRepository } = require("../repositories/index");

class AirportService extends CrudService {
    constructor() {
        const airportRepository = new AirportRepository();
        super(airportRepository,"AirportService");
    }
}

module.exports = AirportService;