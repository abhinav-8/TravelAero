const express = require('express');
const { CityController, FlightController, AirplaneController, AirportController } = require('../../controllers/index');
const { FlightMiddleware } = require("../../middlewares/index");
const router = express.Router();

router.post('/cities', CityController.create);
router.get('/cities/:id', CityController.get);
router.patch('/cities/:id', CityController.update);
router.delete('/cities/:id', CityController.destroy);
router.get('/cities',CityController.getAll);

router.post('/flights',FlightMiddleware.validateCreateFlight,FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id',FlightController.update);
router.delete('/flights/:id',FlightController.destroy);

router.post('/airplanes',AirplaneController.create);
router.get('/airplanes/:id',AirplaneController.get);
router.get('/airplanes',AirplaneController.getAll);
router.patch('/airplanes/:id',AirplaneController.update);
router.delete('/airplanes/:id',AirplaneController.destroy);

router.post('/airports',AirportController.create);
router.get('/airports/:id',AirportController.get);
router.get('/airports',AirportController.getAll);
router.patch('/airports/:id',AirportController.update);
router.delete('/airports/:id',AirportController.destroy);


module.exports = router;