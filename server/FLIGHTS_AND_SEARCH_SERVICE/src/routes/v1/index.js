const express = require('express');
const { CityController, FlightController, AirplaneController, AirportController } = require('../../controllers/index');
const { FlightMiddleware } = require("../../middlewares/index");
const router = express.Router();

router.post('/cities',FlightMiddleware.authorizeAdmin, CityController.create); //admin
router.get('/cities/:id', CityController.get);
router.patch('/cities/:id',FlightMiddleware.authorizeAdmin, CityController.update); //admin
router.delete('/cities/:id',FlightMiddleware.authorizeAdmin, CityController.destroy); //admin
router.get('/cities',CityController.getAll);

router.post('/flights',FlightMiddleware.authorizeAdmin,FlightMiddleware.validateCreateFlight,FlightController.create); //admin
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);
router.patch('/flights/:id',FlightMiddleware.authorizeAdmin,FlightController.update); //admin
router.delete('/flights/:id',FlightMiddleware.authorizeAdmin,FlightController.destroy); //admin

router.post('/airplanes',FlightMiddleware.authorizeAdmin,AirplaneController.create); //admin
router.get('/airplanes/:id',AirplaneController.get);
router.get('/airplanes',AirplaneController.getAll);
router.patch('/airplanes/:id',FlightMiddleware.authorizeAdmin,AirplaneController.update); //admin
router.delete('/airplanes/:id',FlightMiddleware.authorizeAdmin,AirplaneController.destroy); //admin

router.post('/airports',FlightMiddleware.authorizeAdmin,AirportController.create); //admin
router.get('/airports/:id',AirportController.get);
router.get('/airports',AirportController.getAll);
router.patch('/airports/:id',FlightMiddleware.authorizeAdmin,AirportController.update); //admin
router.delete('/airports/:id',FlightMiddleware.authorizeAdmin,AirportController.destroy); //admin


module.exports = router;