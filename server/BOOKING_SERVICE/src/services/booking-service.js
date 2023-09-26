const axios = require('axios');

const { BookingRepository } = require('../repositories/index');
const { FLIGHT_SERVICE_PATH_LOCAL } = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors/index');

class BookingService {
    constructor() {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const flightId = data.flightId;
            const FlightRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/flights/${flightId}`;
            const response = await axios.get(FlightRequestURL);
            const flightData = response.data.data;
            let priceFlight = flightData.price;

            if(data.noOfSeats > flightData.totalSeats) {
                throw new ServiceError('Something went wrong', 'Enough seats not available');
            }
            const totalCost = priceFlight * data.noOfSeats;
            const bookingPayload = {...data,totalCost};
            const booking = await this.bookingRepository.create(bookingPayload);
            await axios.patch(FlightRequestURL, { totalSeats : flightData.totalSeats - data.noOfSeats});
            const finalBooking = await this.bookingRepository.update(booking.id, {status: "Booked"});
            return finalBooking;
        } catch (error) {
            if(error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError();
        }
    }

    async cancelBooking(bookingId) {
        try {
            const booking = await this.bookingRepository.get(bookingId);
            const flightId = booking.flightId;
            const FlightRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/flights/${flightId}`;
            const response = await axios.get(FlightRequestURL);
            const flightData = response.data.data;
            await axios.patch(FlightRequestURL, { totalSeats : flightData.totalSeats + booking.noOfSeats});
            const cancelledBooking = await this.bookingRepository.update(booking.id, {status: "Cancelled"});
            return cancelledBooking;
        } catch (error) {
            if(error.name == 'RepositoryError' || error.name == 'ValidationError') {
                throw error;
            }
            throw new ServiceError();
        }
    }

    async getBooking(bookingId) {
        try {
            const booking = await this.bookingRepository.get(bookingId);
            return booking;
        } catch (error) {
            throw new ServiceError();
        }
    }
}

module.exports = BookingService;