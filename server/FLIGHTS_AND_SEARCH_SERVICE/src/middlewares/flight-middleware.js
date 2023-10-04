const { clientErrorCodes } = require("../utils/error-codes");
const { AUTH_SERVICE_PATH_LOCAL } = require('../config/serverConfig');
const axios = require('axios');

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


const authorizeAdmin =  async (req, res, next) => {
  try {
    const response = await axios.get(
      `${AUTH_SERVICE_PATH_LOCAL}/api/v1/isAdmin`,{
        headers: {
          'Authorization': req.headers['authorization'],
        },
      }
    );
    if (response.data.success) {
      next();
    } else {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
};

module.exports = {
    validateCreateFlight,
    authorizeAdmin
}