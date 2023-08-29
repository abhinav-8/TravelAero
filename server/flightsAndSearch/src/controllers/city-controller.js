const {CityService} = require("../services/index");

const cityService = new CityService();

//POST -> /city/
const create = async (req,res) => {
    try {
        const response = await cityService.createCity(req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully created city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Oops! Some error occured, can\'t create city',
            err: error
        });
    }
}

//GET -> /city/:id
const get = async (req,res) => {
    try {
        const response = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Oops! Some error occured, can\'t fetch city',
            err: error
        });
    }
} 

//PATCH -> /city/:id
const update = async (req,res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully updated city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Oops! Some error occured, can\'t update city',
            err: error
        });
    }
} 

//DELETE -> /city/:id
const destroy = async (req,res) => {
    try {
        const response = await cityService.deleteCity(req.params.id, req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Oops! Some error occured, can\'t delete city',
            err: error
        });
    }
} 

module.exports = {
    create,
    get,
    update,
    destroy,
}