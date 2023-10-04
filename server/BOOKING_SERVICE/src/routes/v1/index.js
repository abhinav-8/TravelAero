const express = require('express');
const { BookingController } = require('../../controllers/index');

const router = express.Router();

const createRoutes = (channel) => {
  const bookingController = new BookingController(channel);

  router.post('/bookings', bookingController.create);
  router.get('/bookings/:id', bookingController.get);
  router.patch('/bookings/:id', bookingController.cancelBooking);

  return router;
};

module.exports = createRoutes;
