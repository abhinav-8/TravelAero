const {CityService} = require("../services/index");
const {serverErrorCodes,successCodes} = require("../utils/error-codes");

const cityService = new CityService();

//POST -> /cities
const create = async (req,res) => {
    try {
        const response = await cityService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t create city',
            err: error
        });
    }
}

//GET -> /cities/:id
const get = async (req,res) => {
    try {
        const response = await cityService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch city',
            err: error
        });
    }
} 

//GET -> /cities
const getAll = async (req,res) => {
    try {
        const response = await cityService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched cities',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch cities',
            err: error
        });
    }
}

//PATCH -> /cities/:id
const update = async (req,res) => {
    try {
        const response = await cityService.update(req.params.id, req.body);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t update city',
            err: error
        });
    }
} 

//DELETE -> /cities/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t delete city',
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