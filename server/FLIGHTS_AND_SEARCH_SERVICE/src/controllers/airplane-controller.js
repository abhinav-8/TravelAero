const {AirplaneService} = require("../services/index");
const {serverErrorCodes,successCodes} = require("../utils/error-codes");
const airplaneService = new AirplaneService();

//POST -> /airplanes
const create = async (req,res) => {
    try {
        const response = await airplaneService.create(req.body);
        return res.status(successCodes.CREATED).json({
            data: response,
            success: true,
            message: 'Successfully created airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t create airplane',
            err: error
        });
    }
}

//GET -> /airplanes/:id
const get = async (req,res) => {
    try {
        const response = await airplaneService.get(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch airplane',
            err: error
        });
    }
} 

//GET -> /airplanes
const getAll = async (req,res) => {
    try {
        const response = await airplaneService.getAll(req.query);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully fetched airplanes',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t fetch airplanes',
            err: error
        });
    }
}

//PATCH -> /airplanes/:id
const update = async (req,res) => {
    try {
        const response = await airplaneService.update(req.params.id, req.body);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully updated airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t update airplane',
            err: error
        });
    }
} 

//DELETE -> /airplanes/:id
const destroy = async (req,res) => {
    try {
        const response = await airplaneService.destroy(req.params.id);
        return res.status(successCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfully deleted airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
            data: {},
            success: false,
            message: 'Oops! Some error occurred, can\'t delete airplane',
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