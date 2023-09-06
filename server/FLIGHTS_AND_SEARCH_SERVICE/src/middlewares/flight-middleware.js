const { clientErrorCodes } = require("../utils/error-codes");

const validateCreateFlight = (req,res,next) => {
    if(
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.departureAirportId||
        !req.body.arrivalAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price
    ) {
        //If any of the body params are missing
        return res.status(clientErrorCodes.BAD_REQUEST).json({
            data: {},
            success: false,
            message: "Invalid request body to create flight",
            err: "Missing mandatory fields to create a flight",
        });
    }

    next();

}

module.exports = {
    validateCreateFlight,
}