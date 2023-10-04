const express = require('express');
const { BookingController } = require('../../controllers/index');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Bookings
 *   description: API endpoints for flight bookings and management
 */
const createRoutes = (channel) => {
  const bookingController = new BookingController(channel);



/**
 * @swagger
 * /bookingservice/api/v1/bookings:
 *   post:
 *     summary: Create a new booking
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               flightId:
 *                 type: integer
 *               userId:
 *                 type: integer
 *               noOfSeats:
 *                 type: integer
 *             required:
 *               - flightId
 *               - userId
 *               - noOfSeats
 *     responses:
 *       201:
 *         description: Booking Completed successfully
 *       401:
 *         description: Authorization Error
 *       500:
 *         description: Internal Server Error
 */
router.post('/bookings', bookingController.create);


/**
 * @swagger
 * /bookingservice/api/v1/bookings/{id}:
 *   get:
 *     summary: Get booking details of particular id
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the booking to retrieve
 *         schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Fetched Booking successfully
 *       401:
 *         description: Authorization Error
 *       500:
 *         description: Internal Server Error
 */
router.get('/bookings/:id', bookingController.get);


/**
 * @swagger
 * /bookingservice/api/v1/bookings/{id}:
 *   patch:
 *     summary: Delete booking of particular id
 *     tags: [Bookings]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the booking to Delete
 *         schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Fetched Booking successfully
 *       401:
 *         description: Authorization Error
 *       500:
 *         description: Internal Server Error
 */
router.patch('/bookings/:id', bookingController.cancelBooking);

  return router;
};

module.exports = createRoutes;
