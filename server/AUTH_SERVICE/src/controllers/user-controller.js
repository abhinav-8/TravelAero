const { UserService } = require("../services/index");
const { serverErrorCodes, successCodes } = require("../utils/error-codes");
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
    console.log(error);
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
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
      data: {},
      success: false,
      message: "Oops! Some error occurred, can't delete user",
      err: error,
    });
  }
};

//GET -> /users/:id
const get = async (req, res) => {
  try {
    const response = await userService.get(req.params.id);
    return res.status(successCodes.OK).json({
      data: response,
      success: true,
      message: "Successfully fetched user",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(serverErrorCodes.INTERNAL_SERVOR_ERROR).json({
      data: {},
      success: false,
      message: "Oops! Some error occurred, can't fetch user",
      err: error,
    });
  }
};

module.exports = {
    create,
    destroy,
    get
}
