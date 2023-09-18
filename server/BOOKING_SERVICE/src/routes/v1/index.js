const express = require('express');

const { BookingController } = require('../../controllers/index');

const router = express.Router(); 

router.post('/bookings', BookingController.create);
router.get('/bookings/:id', BookingController.get);
router.patch('/bookings/:id',BookingController.cancelBooking);
module.exports = router;