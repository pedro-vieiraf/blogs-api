const route = require('express').Router();
// const userValidation = require('../middlewares');
const { userController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');
const userTokenValidation = require('../middlewares/userTokenValidation');

route.post('/', userController.createUser);
route.get('/', tokenValidation, userTokenValidation, userController.findAllUsers);
route.get('/:id', tokenValidation, userTokenValidation, userController.findById);

module.exports = {
  route,
};