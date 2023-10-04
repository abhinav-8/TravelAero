const axios = require("axios");
const { BookingRepository } = require("../repositories/index");
const {
  FLIGHT_SERVICE_PATH_LOCAL,
  AUTH_SERVICE_PATH_LOCAL,
  REMINDER_BINDING_KEY
} = require("../config/serverConfig");
const { ServiceError } = require("../utils/errors/index");
const formatDateTime = require("../utils/formatDateTime");
const { publishMessage } = require('../utils/messageQueue');


class BookingService {
  constructor(channel) {
    this.bookingRepository = new BookingRepository();
    this.channel = channel;
    this.sendEmail = this.sendEmail.bind(this);
  }
  async sendEmail(
    departureCity,
    departureAirport,
    arrivalCity,
    arrivalAirport,
    departureTime,
    arrivalTime,
    passengerCount,
    totalPrice,
    flightNumber,
    recipientEmailId,
    name
  ) {
    try {
      const payload = {
        data: {
          subject: "E-Ticket for Your Flight Booking",
          recipientEmail: recipientEmailId,
          departureCity: departureCity,
          departureAirport: departureAirport,
          arrivalCity: arrivalCity,
          arrivalAirport: arrivalAirport,
          departureTime: departureTime,
          arrivalTime: arrivalTime,
          passengerCount: passengerCount,
          totalPrice: totalPrice,
          flightNumber: flightNumber,
          name:name,
        },
        service: "SEND_BASIC_MAIL",
      };
      publishMessage(
        this.channel,
        REMINDER_BINDING_KEY,
        JSON.stringify(payload)
      );
      console.log("Sent message to queue");
    } catch (error) {
      console.log("Error in publishing to queue");
    }
    
  }

  sendReminder = async (
    departureCity,
    departureAirport,
    arrivalCity,
    arrivalAirport,
    departureTime,
    arrivalTime,
    passengerCount,
    flightNumber,
    recipientEmailId,
    notificationTime,
    totalPrice,
    name,
  ) => {
    try {
        const payload = {
          data: {
            subject: "Your Upcoming Flight: Friendly Reminder!",
            content: `{"departureCity":"${departureCity}","departureAirport":"${departureAirport}","departureTime":"${departureTime}","arrivalCity":"${arrivalCity}","arrivalAirport":"${arrivalAirport}","totalPrice":"${totalPrice}","arrivalTime":"${arrivalTime}","flightNumber":"${flightNumber}","passengerCount":"${passengerCount}","name":"${name}"}`,
            recipientEmail: recipientEmailId,
            notificationTime: notificationTime,
          },
          service: "CREATE_NOTIFICATION",
        };
        publishMessage(this.channel, REMINDER_BINDING_KEY, JSON.stringify(payload));
        console.log("Sent message to queue");
    } catch (error) {
        console.log("Error in publishing to queue"); 
    }
    
  };

  async createBooking(data) {
    try {
      const flightId = data.flightId;
      const userId = data.userId;
      const FlightRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/flights/${flightId}`;
      const UserRequestURL = `${AUTH_SERVICE_PATH_LOCAL}/api/v1/users/${userId}`;
      const response = await axios.get(FlightRequestURL);
      const flightData = response.data.data;
      let priceFlight = flightData.price;
      if (data.noOfSeats > flightData.totalSeats) {
        throw new ServiceError(
          "Something went wrong",
          "Enough seats not available"
        );
      }
      const totalCost = priceFlight * data.noOfSeats;
      const bookingPayload = { ...data, totalCost };
      const booking = await this.bookingRepository.create(bookingPayload);
      await axios.patch(FlightRequestURL, {
        totalSeats: flightData.totalSeats - data.noOfSeats,
      });
      
      const finalBooking = await this.bookingRepository.update(booking.id, {
        status: "Booked",
      });
      let flightNumber = flightData.flightNumber;
      let arrivalTime = formatDateTime(flightData.arrivalTime);
      let departureTime = formatDateTime(flightData.departureTime);
      let departureAirportId = flightData.departureAirportId;
      let arrivalAirportId = flightData.arrivalAirportId;
      let userResponse = await axios.get(UserRequestURL);
      const userData = userResponse.data.data;
      let userEmailId = userData.email;
      let name = userData.name;
      const departureAirportRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/airports/${departureAirportId}`;
      const arrivalAirportRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/airports/${arrivalAirportId}`;

      const departureAirportResponse = await axios.get(
        departureAirportRequestURL
      );
      const arrivalAirportResponse = await axios.get(arrivalAirportRequestURL);
      let departureAirport = departureAirportResponse.data.data.name;
      let arrivalAirport = arrivalAirportResponse.data.data.name;
      let departureCityId = departureAirportResponse.data.data.cityId;
      let arrivalCityId = arrivalAirportResponse.data.data.cityId;

      const departureCityRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/cities/${departureCityId}`;
      const arrivalCityRequestURL = `${FLIGHT_SERVICE_PATH_LOCAL}/api/v1/cities/${arrivalCityId}`;

      const departureCityResponse = await axios.get(departureCityRequestURL);
      const arrivalCityResponse = await axios.get(arrivalCityRequestURL);

      let departureCity = departureCityResponse.data.data.name;
      let arrivalCity = arrivalCityResponse.data.data.name;
      let totalPrice = `${totalCost} INR`;

      //Send Email for booking
      await this.sendEmail(
        departureCity,
        departureAirport,
        arrivalCity,
        arrivalAirport,
        departureTime,
        arrivalTime,
        data.noOfSeats,
        totalPrice,
        flightNumber,
        userEmailId,
        name
      );
      

      const givenDate = new Date(flightData.departureTime);
      const targetTimeGMT60 = givenDate.getTime() - 60 * 60 * 60 * 1000; // 60 hours in milliseconds
      const targetTimeGMT28 = givenDate.getTime() - 28 * 60 * 60 * 1000; // 28 hours in milliseconds

      // Adjust for IST (GMT+5:30) timezone difference (in milliseconds)
      const ISTOffset = 5.5 * 60 * 60 * 1000; // 5.5 hours in milliseconds
      const targetTimeIST60 = targetTimeGMT60 + ISTOffset;
      const targetTimeIST28 = targetTimeGMT28 + ISTOffset;

      // Get the current time in IST
      const currentTimeIST = new Date().getTime();

      if(currentTimeIST <= targetTimeIST60 ){
        const notificationTime = new Date(givenDate.getTime() - 48* 60 * 60 * 1000).toISOString();
        await this.sendReminder(
            departureCity,
            departureAirport,
            arrivalCity,
            arrivalAirport,
            departureTime,
            arrivalTime,
            data.noOfSeats,
            flightNumber,
            userEmailId,
            notificationTime,
            totalPrice,
            name
        )
      }
      else if(currentTimeIST <= targetTimeIST28){
        const notificationTime = new Date(givenDate.getTime() - 24 * 60 * 60 * 1000).toISOString();
        await this.sendReminder(
            departureCity,
            departureAirport,
            arrivalCity,
            arrivalAirport,
            departureTime,
            arrivalTime,
            data.noOfSeats,
            flightNumber,
            userEmailId,
            notificationTime,
            totalPrice,
            name
        )
      }
      return finalBooking;
    } catch (error) {
      if (error.name == "RepositoryError" || error.name == "ValidationError") {
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
      await axios.patch(FlightRequestURL, {
        totalSeats: flightData.totalSeats + booking.noOfSeats,
      });
      const cancelledBooking = await this.bookingRepository.update(booking.id, {
        status: "Cancelled",
      });
      return cancelledBooking;
    } catch (error) {
      if (error.name == "RepositoryError" || error.name == "ValidationError") {
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
