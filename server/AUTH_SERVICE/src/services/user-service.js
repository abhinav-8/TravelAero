const { UserRepository } = require("../repositories/index");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { JWT_KEY } = require("../config/serverConfig");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const response = await this.userRepository.create(data);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong at service layer");
      throw { error };
    }
  }

  async destroy(userId) {
    try {
      const response = await this.userRepository.destroy(userId);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong at service layer");
      throw { error };
    }
  }

  async getById(userId) {
    try {
      const response = await this.userRepository.getById(userId);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong at service layer");
      throw { error };
    }
  }

  generateToken(user){
    try {
      const token = jwt.sign(user, JWT_KEY, {expiresIn: '2h'});
      return token;
    } catch (error) {
      console.log("UserService: Something went wrong while generating token");
      throw {error};
    }
  }

  verifyToken(token) {
    try {
      const response = jwt.verify(token, JWT_KEY);
      return response;
    } catch (error) {
      console.log("UserService: Something went wrong while verifying token");
      throw {error};
    }
  }

  verifyPassword(userInputplainPassword, encryptedPassword) {
    try {
      const response = bcrypt.compareSync(userInputplainPassword, encryptedPassword);
      return response;
    } catch(error) {
      console.log("UserService: Something went wrong while verifying password");
      throw {error};
    }
  }

  async login(userEmail, userInputplainPassword) {
    try {
      const user = await this.userRepository.getByEmail(userEmail);
      
      const checkPassword = this.verifyPassword(userInputplainPassword,user.password);
      
      if(checkPassword == false) {
        console.log("You have entered wrong password");
        throw {error: "Incorrect password"};
      }

      const token = this.generateToken({email: user.email,id:user.id});
      return token;
    } catch (error) {
      console.log("UserService: Something went wrong while attempting to login");
      throw {error};
    }
  }
}

module.exports = UserService;