const { UserService } = require("../services/index");
const { serverErrorCodes, successCodes, clientErrorCodes } = require("../utils/error-codes");
const userService = new UserService();

//POST -> /signup
const create = async (req, res) => {
  try {
    const response = await userService.create(req.body);
    return res.status(successCodes.CREATED).json({
      data: response,
      success: true,
      message: "Successfully created user",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
      data: {},
      success: false,
      message: "Oops! Some error occurred, can't create user",
      err: error,
    });
  }
};

//DELETE -> /users/:id
const destroy = async (req, res) => {
  try {
    const response = await userService.destroy(req.params.id);
    return res.status(successCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully deleted user",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
      data: {},
      success: false,
      message: "Oops! Some error occurred, can't delete user",
      err: error,
    });
  }
};

//GET -> /users/:id
const getById = async (req, res) => {
  try {
    const response = await userService.getById(req.params.id);
    return res.status(successCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched user",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
      data: {},
      success: false,
      message: "Oops! Some error occurred, can't fetch user",
      err: error,
    });
  }
};

//POST -> /login
const login = async (req,res) => {
  try {
    const response = await userService.login(req.body.email,req.body.password);
    return res.status(successCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully logged in",
      err: {},
    });
  } catch (error) {
    return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
      data: {},
      success: false,
      message: "Oops! Some error occurred, can't login",
      err: error,
    })
  }
}

const isAuthenticated = async (req,res) => {
  try {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader?.split(' ')[1];
    const response = await userService.isAuthenticated(token);
    return res.status(successCodes.OK).json({
      data: response,
      success: true,
      message: "authenticated",
      err: {},
    })
  } catch (error) {
    return res.status(clientErrorCodes.UNAUTHORISED).json({
      data: {},
      success: false,
      message: "authenticated",
      err: error,
    })
  }
}

const isAdmin = async (req, res) => {
  try {
    const bearerHeader = req.headers['authorization'];
    const token = bearerHeader?.split(' ')[1];
    const user = await userService.isAuthenticated(token);
    const response = await userService.isAdmin(user);
    if(response){
      return res.status(successCodes.OK).json({
        data: response,
        success: true,
        message: "authorized",
        err: {},
      });
    }
    return res.status(clientErrorCodes.UNAUTHORISED).json({
      data: {},
      success: false,
      message: "unauthorized",
      err: error,
    })
  } catch (error) {
    return res.status(clientErrorCodes.UNAUTHORISED).json({
      data: {},
      success: false,
      message: "unauthorized",
      err: error,
    })
  }
}

module.exports = {
    create,
    destroy,
    getById,
    login,
    isAuthenticated,
    isAdmin
}
