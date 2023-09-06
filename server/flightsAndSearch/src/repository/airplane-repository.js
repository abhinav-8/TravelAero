const CrudRepository = require("./crud-repository");
const { Airplane } = require("../models/index");

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;