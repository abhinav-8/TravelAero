const { AirportService } = require("../services/index");
const {serverErrorCodes,successCodes} = require("../utils/error-codes");

const airportService = new AirportService();

//POST -> /airports
const create = async (req,res) => {
    try {
        const response = await airportService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: "Successfully created airport",
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: "Oops! Some error occurred, can\'t create an airport",
            err: error
        })
    }
}

//GET -> /airports/:id
const get = async (req,res) => {
    try {
        const response = await airportService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched airport",
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: "Oops! Some error occurred, can\'t fetch airport",
            err: error
        })
    }
}

//GET -> /airports
const getAll = async (req,res) => {
    try {
        const response = await airportService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully fetched airports",
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: "Oops! Some error occurred, can\'t fetch airports",
            err: error
        })
    }
}

//PATCH -> /airports/:id
const update = async (req,res) => {
    try {
        const response = await airportService.update(req.params.id,req.body);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully updated airport",
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: "Oops! Some error occurred, can\'t update airport",
            err: error
        })
    }
}

//DELETE -> /airports/:id
const destroy = async (req,res) => {
    try {
        const response = await airportService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: "Successfully deleted airport",
            err: {}
        });    
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: "Oops! Some error occurred, can\'t delete airport",
            err: error
        })
    }
}


module.exports = {
    create,
    get,
    getAll,
    update,
    destroy,
}
