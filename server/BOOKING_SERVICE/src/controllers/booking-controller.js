const { BookingService } = require('../services/index');
const { StatusCodes } = require('http-status-codes');

class BookingController {

    constructor(channel) {
        this.channel = channel;
        this.bookingService = new BookingService(channel);

    }
    
    create = async (req, res) => {
        try {
            const response = await this.bookingService.createBooking(req.body);
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

    get  = async (req, res) => {
        try {
            const response = await this.bookingService.getBooking(req.params.id);
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

    cancelBooking = async(req, res) => {
        try {
            const response = await this.bookingService.cancelBooking(req.params.id);
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