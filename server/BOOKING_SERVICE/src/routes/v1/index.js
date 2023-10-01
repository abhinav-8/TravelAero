const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router(); 

const bookingController = new BookingController();

router.post('/bookings', bookingController.create);
router.get('/bookings/:id', bookingController.get);
router.patch('/bookings/:id',bookingController.cancelBooking);
router.post('/publish', bookingController.sendMessageToQueue);
module.exports = router;