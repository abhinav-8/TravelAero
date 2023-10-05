const express = require('express');
const { CityController, FlightController, AirplaneController, AirportController } = require('../../controllers/index');
const { FlightMiddleware } = require("../../middlewares/index");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: CITIES
 *     description: API endpoints for managing Cities
 *   - name: AIRPORTS
 *     description: API endpoints for managing Airports
 *   - name: AIRPLANES
 *     description: API endpoints for managing Airplanes
 *   - name: FLIGHTS
 *     description: API endpoints for managing Flights 
 */


/**
 * @swagger
 * /flightservice/api/v1/cities:
 *   post:
 *     summary: Create new city/cities
 *     tags: [CITIES]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *           examples:
 *             example1:
 *               value:
 *                 - {"name": "Kochi"}
 *                 - {"name": "Lucknow"}
 *               summary: Example for bulk create
 *             example2:
 *               value:
 *                 - {"name": "Delhi"}
 *               summary: Example for creating single city
 *     description: This endpoint is accessible only for **admin** users. It accepts an array of JSON objects in the request body, each containing a 'name' property.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.post('/cities',FlightMiddleware.authorizeAdmin, CityController.create); //admin

/**
 * @swagger
 * /flightservice/api/v1/cities/{id}:
 *   get:
 *     summary: Get city name
 *     tags: [CITIES]
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the city to retrieve
 *        schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/cities/:id', CityController.get);

/**
 * @swagger
 * /flightservice/api/v1/cities/{id}:
 *   patch:
 *     summary: Update city
 *     tags: [CITIES]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the city to update
 *        schema:
 *            type: integer
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.patch('/cities/:id',FlightMiddleware.authorizeAdmin, CityController.update); //admin

/**
 * @swagger
 * /flightservice/api/v1/cities/{id}:
 *   delete:
 *     summary: Delete a city
 *     tags: [CITIES]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the city to delete
 *        schema:
 *            type: integer
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.delete('/cities/:id',FlightMiddleware.authorizeAdmin, CityController.destroy); //admin

/**
 * @swagger
 * /flightservice/api/v1/cities:
 *   get:
 *     summary: Get all cities and cities starting with particular substring
 *     tags: [CITIES]
 *     parameters: 
 *       - name: name
 *         in: query
 *         description: Filter the cities starting with filter
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/cities',CityController.getAll);


/**
 * @swagger
 * /flightservice/api/v1/airports:
 *   post:
 *     summary: Create new airport
 *     tags: [AIRPORTS]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               cityId:
 *                 type: integer
 *               address:
 *                 type: string
 *             required:
 *               - name
 *               - cityId
 *               - address
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request (might be missing mandatory fields)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Not Implemented
 *       201:
 *         description: Successfully created
 *       404:
 *         description: Not Found
 */
router.post('/airports',FlightMiddleware.authorizeAdmin,AirportController.create); //admin

/**
 * @swagger
 * /flightservice/api/v1/airports/{id}:
 *   get:
 *     summary: Get airport details
 *     tags: [AIRPORTS]
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the airport to retrieve
 *        schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/airports/:id',AirportController.get);

/**
 * @swagger
 * /flightservice/api/v1/airports:
 *   get:
 *     summary: Fetch All Airports
 *     tags: [AIRPORTS]
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/airports',AirportController.getAll);

/**
 * @swagger
 * /flightservice/api/v1/airports/{id}:
 *   patch:
 *     summary: Update Details Of Airport
 *     tags: [AIRPORTS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the airport to update
 *        schema:
 *            type: integer
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               - address:
 *                  type: string
 *               - name:
 *                  type: string
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.patch('/airports/:id',FlightMiddleware.authorizeAdmin,AirportController.update); //admin

/**
 * @swagger
 * /flightservice/api/v1/airports/{id}:
 *   delete:
 *     summary: Delete an airport
 *     tags: [AIRPORTS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the airport to delete
 *        schema:
 *            type: integer
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.delete('/airports/:id',FlightMiddleware.authorizeAdmin,AirportController.destroy); //admin

/**
 * @swagger
 * /flightservice/api/v1/airplanes:
 *   post:
 *     summary: Create new airplane
 *     tags: [AIRPLANES]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               modelNumber:
 *                 type: string
 *               capacity:
 *                 type: string
 *             required:
 *               - modelNumber

 *     description: |
 *        This endpoint is accessible only for **admin** users.
 *        Example: `modelNumber:Airbus 524`, `capacity:300`(default value is 200)
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request (might be missing mandatory fields)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Not Implemented
 *       201:
 *         description: Successfully created
 *       404:
 *         description: Not Found
 */
router.post('/airplanes',FlightMiddleware.authorizeAdmin,AirplaneController.create); //admin

/**
 * @swagger
 * /flightservice/api/v1/airplanes/{id}:
 *   get:
 *     summary: Get airplane details
 *     tags: [AIRPLANES]
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the airplane to retrieve
 *        schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/airplanes/:id',AirplaneController.get);

/**
 * @swagger
 * /flightservice/api/v1/airplanes:
 *   get:
 *     summary: Fetch All Airplanes
 *     tags: [AIRPLANES]
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/airplanes',AirplaneController.getAll);

/**
 * @swagger
 * /flightservice/api/v1/airplanes/{id}:
 *   patch:
 *     summary: Update airplane
 *     tags: [AIRPLANES]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the airplane to update
 *        schema:
 *            type: integer
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               modelNumber:
 *                 type: string
 *               capacity:
 *                 type: integer
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.patch('/airplanes/:id',FlightMiddleware.authorizeAdmin,AirplaneController.update); //admin

/**
 * @swagger
 * /flightservice/api/v1/airplanes/{id}:
 *   delete:
 *     summary: Delete an airplane
 *     tags: [AIRPLANES]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the airplane to delete
 *        schema:
 *            type: integer
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.delete('/airplanes/:id',FlightMiddleware.authorizeAdmin,AirplaneController.destroy); //admin

/**
 * @swagger
 * /flightservice/api/v1/flights:
 *   post:
 *     summary: Create new flight
 *     tags: [FLIGHTS]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               flightNumber:
 *                 type: string
 *               airplaneId:
 *                 type: integer
 *               departureAirportId:
 *                 type: integer
 *               arrivalAirportId:
 *                 type: integer
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *               price:
 *                 type: integer
 *               boardingGate:
 *                 type: string
 *             required:
 *               - flightNumber
 *               - airplaneId
 *               - departureAirportId
 *               - arrivalAirportId
 *               - arrivalTime
 *               - departureTime
 *               - price
 *     description: |
 *          This endpoint is accessible only for **admin** users.
 *          Example: `flightNumber:UK 912`, `airplaneId:5`, `departureAirportId:9`, `arrivalAirportId:2`,<br/><br/>
 *           `arrivalTime:2023-10-06T19:50:00`, `departureTime:2023-10-06T16:30:00`, `price:5199`, 
 *           `boardingGate:T2-21A`
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request (might be missing mandatory fields)
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *       501:
 *         description: Not Implemented
 *       201:
 *         description: Successfully created
 *       404:
 *         description: Not Found
 */
router.post('/flights',FlightMiddleware.authorizeAdmin,FlightMiddleware.validateCreateFlight,FlightController.create); //admin

/**
 * @swagger
 * /flightservice/api/v1/flights/{id}:
 *   get:
 *     summary: Get flight details
 *     tags: [FLIGHTS]
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the flight to retrieve
 *        schema:
 *            type: integer
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/flights/:id',FlightController.get);

/**
 * @swagger
 * /flightservice/api/v1/flights:
 *   get:
 *     summary: Get all flights with filters
 *     tags: [FLIGHTS]
 *     parameters: 
 *       - name: arrivalAirportId
 *         in: query
 *         description: Filter the flights with filters
 *         required: false
 *         schema:
 *           type: integer
 *       - name: departureAirportId
 *         in: query
 *         description: Filter the flights with filters
 *         required: false
 *         schema:
 *           type: integer
 *       - name: minPrice
 *         in: query
 *         description: Filter the flights with filters
 *         required: false
 *         schema:
 *           type: integer
 *       - name: maxPrice
 *         in: query
 *         description: Filter the flights with filters
 *         required: false
 *         schema:
 *           type: integer
 *       - name: departureDate
 *         in: query
 *         description: Filter the flights with filters
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *           example: 2023-10-03
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.get('/flights',FlightController.getAll);

/**
 * @swagger
 * /flightservice/api/v1/flights/{id}:
 *   patch:
 *     summary: Update flight details
 *     tags: [FLIGHTS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the flight to update
 *        schema:
 *            type: integer
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               flightNumber:
 *                 type: string
 *               airplaneId:
 *                 type: integer
 *               departureAirportId:
 *                 type: integer
 *               arrivalAirportId:
 *                 type: integer
 *               arrivalTime:
 *                 type: string
 *                 format: date-time
 *               departureTime:
 *                 type: string
 *                 format: date-time
 *               price:
 *                 type: integer
 *               boardingGate:
 *                 type: string
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.patch('/flights/:id',FlightController.update); //admin

/**
 * @swagger
 * /flightservice/api/v1/flights/{id}:
 *   delete:
 *     summary: Delete a flight
 *     tags: [FLIGHTS]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the flight to delete
 *        schema:
 *            type: integer
 *     description: This endpoint is accessible only for **admin** users.
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 */
router.delete('/flights/:id',FlightMiddleware.authorizeAdmin,FlightController.destroy); //admin





module.exports = router;