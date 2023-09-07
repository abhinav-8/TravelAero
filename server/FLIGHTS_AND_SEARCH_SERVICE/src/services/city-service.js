const CrudService = require("./crud-service");
const { CityRepository } = require("../repository/index");

class CityService extends CrudService {
    constructor() {
        const cityRepository = new CityRepository();
        super(cityRepository,"CityService");
    }
}

module.exports = CityService;