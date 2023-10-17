const sender = require("../config/emailConfig");
const NotificationRepository = require("../repositories/notification-repository");
const emailTemplate = require("../utils/emailTemplate");
const repo = new NotificationRepository();

const sendBasicEmail = async (
  mailFrom,
  mailTo,
  mailSubject,
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
  departureTime,
  arrivalTime,
  passengerCount,
  totalPrice,
  flightNumber,
  name,
) => {
  try {
    const response = await sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      html: emailTemplate(
        departureCity,
        departureAirport,
        arrivalCity,
        arrivalAirport,
        departureTime,
        arrivalTime,
        passengerCount,
        totalPrice,
        flightNumber,
        name,
        `Hello ${name}, Please find E-Ticket for your journey from ${departureCity} to ${arrivalCity}`
      ),
    });
    return response;
  } catch (error) {
    console.log("Error in email service");
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await repo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    throw error;
  }
};

const createNotification = async (data) => {
  try {
    const response = await repo.create(data);
    return response;
  } catch (error) {
    throw error;
  }
};

const updateNotification = async (notificationId, data) => {
  try {
    const response = await repo.update(notificationId, data);
    return response;
  } catch (error) {
    throw error;
  }
};

const subscribeEvents = async (payload) => {
  let service = payload.service;
  let data = payload.data;
  switch (service) {
    case "CREATE_NOTIFICATION":
      await createNotification(data);
      break;
    case "SEND_BASIC_MAIL":
      await sendBasicEmail(
        "TravelAero <support@travelaero.com>",
        data.recipientEmail,
        data.subject,
        data.departureCity,
        data.departureAirport,
        data.arrivalCity,
        data.arrivalAirport,
        data.departureTime,
        data.arrivalTime,
        data.passengerCount,
        data.totalPrice,
        data.flightNumber,
        data.name,
      );
      break;
    default:
      console.log("No valid mail received");
      break;
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateNotification,
  subscribeEvents,
};
