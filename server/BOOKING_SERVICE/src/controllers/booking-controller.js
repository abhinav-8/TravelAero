const { BookingService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');
const { createChannel, publishMessage } = require('../utils/messageQueue');
const { REMINDER_BINDING_KEY } = require('../config/serverConfig')
const bookingService = new BookingService();

class BookingController {

    async sendMessageToQueue(req, res) {
        const channel = await createChannel();
        const data = {message: 'Success'};
        publishMessage(channel, REMINDER_BINDING_KEY, JSON.stringify(data));
        return res.status(200).json({
            message:'Publish Successful'
        });
    }

    async create(req, res) {
        try {
            const response = await bookingService.createBooking(req.body);
            return res.status(StatusCodes.CREATED).json({
                message: 'Successfully completed booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                success: false,
                err: error.explanation,
                data: {}
            });       
        }
    }

    async get (req, res) {
        try {
            const response = await bookingService.getBooking(req.params.id);
            return res.status(StatusCodes.OK).json({
                message: 'Successfully fetched booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                success: false,
                err: error.explanation,
                data: {}
            }); 
        }
    }

    async cancelBooking (req, res) {
        try {
            const response = await bookingService.cancelBooking(req.params.id);
            return res.status(StatusCodes.OK).json({
                message: 'Successfully cancelled booking',
                success: true,
                err: {},
                data: response
            })
        } catch (error) {
            return res.status(error.statusCode).json({
                message: error.message,
                success: false,
                err: error.explanation,
                data: {}
            }); 
        }
    }
}

module.exports = BookingController;