const {FlightService} = require('../services/index');
const {serverErrorCodes,successCodes} = require("../utils/error-codes");

const flightService = new FlightService();

//POST -> /flights
const create = async(req, res) => {
    try {
        const response = await flightService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t create a flight',
            err: error
        });
    }
}

//GET -> /flights/:id
const get = async (req,res) => {
    try {
        const response = await flightService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch flight',
            err: error
        });
    }
}

//GET -> /flights
const getAll = async (req,res) => {
    try {
        const response = await flightService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch flights',
            err: error
        });
    }
}

//PATCH -> /flights/:id
const update = async (req,res) => {
    try {
        const response = await flightService.update(req.params.id, req.body);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated flight details',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t update flight details',
            err: error
        });
    }
} 

//DELETE -> /flights/:id
const destroy = async (req,res) => {
    try {
        const response = await flightService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t delete flight',
            err: error
        });
    }
}


module.exports = {
    create,
    get,
    getAll,
    update,
    destroy,
}

