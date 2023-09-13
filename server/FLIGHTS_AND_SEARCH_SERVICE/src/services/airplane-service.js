const CrudService = require("./crud-service");
const { AirplaneRepository } = require("../repositories/index");

class AirplaneService extends CrudService {
    constructor() {
        const airplaneRepository = new AirplaneRepository();
        super(airplaneRepository,"AirplaneService");
    }
}

module.exports = AirplaneService;