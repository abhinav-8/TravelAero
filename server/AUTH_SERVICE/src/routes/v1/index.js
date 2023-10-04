const express = require("express");
const { UserController } = require("../../controllers/index");
const { AuthValidate } = require("../../middlewares/index");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: AUTH SERVICE
 *   description: API endpoints for User Authentication and Authorization
 */


/**
 * @swagger
 * /authservice/api/v1/signup:
 *   post:
 *     summary: Create a new user
 *     tags: [AUTH SERVICE]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
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
router.post("/signup",AuthValidate.validateUserAuth,UserController.create);

/**
 * @swagger
 * /authservice/api/v1/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [AUTH SERVICE]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the user to delete
 *         schema:
 *            type: string
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
router.delete("/users/:id",UserController.destroy);


/**
 * @swagger
 * /authservice/api/v1/users/{id}:
 *   get:
 *     summary: Get details of a particular user
 *     tags: [AUTH SERVICE]
 *     parameters:
 *      - in: path
 *        name: id
 *        description: ID of the user to retrieve
 *        schema:
 *            type: string
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
router.get("/users/:id",UserController.getById);


/**
 * @swagger
 * /authservice/api/v1/login:
 *   post:
 *     summary: Login
 *     tags: [AUTH SERVICE]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
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
router.post("/login",AuthValidate.validateUserAuth,UserController.login);


/**
 * @swagger
 * /authservice/api/v1/isAuthenticated:
 *   get:
 *     summary: Check if a user is authenticated or not
 *     tags: [AUTH SERVICE]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Request successful
 *       400:
 *         description: Bad Request,missing mandatory fields
 *       401:
 *         description: Unauthenticated
 *       500:
 *         description: Internal Server Error
 */
router.get("/isAuthenticated",UserController.isAuthenticated);


/**
 * @swagger
 * /authservice/api/v1/isAdmin:
 *   get:
 *     summary: Check if a user is admin or not
 *     tags: [AUTH SERVICE]
 *     security:
 *       - BearerAuth: []
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
router.get("/isAdmin",UserController.isAdmin);

module.exports = router;

