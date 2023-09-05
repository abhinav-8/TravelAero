const express = require('express');
const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');

const router = express.Router();

router.post('/cities', CityController.create);
router.get('/cities/:id', CityController.get);
router.patch('/cities/:id', CityController.update);
router.delete('/cities/:id', CityController.destroy);
router.get('/cities',CityController.getAll);

router.post('/flights',FlightController.create);
router.get('/flights/:id',FlightController.get);
router.get('/flights',FlightController.getAll);

module.exports = router;