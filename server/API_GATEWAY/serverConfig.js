const dotenv = require("dotenv");

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    FLIGHT_SERVICE_PATH_LOCAL: process.env.FLIGHT_SERVICE_PATH_LOCAL,
    AUTH_SERVICE_PATH_LOCAL: process.env.AUTH_SERVICE_PATH_LOCAL,
    BOOKING_SERVICE_PATH_LOCAL: process.env.BOOKING_SERVICE_PATH_LOCAL,
}