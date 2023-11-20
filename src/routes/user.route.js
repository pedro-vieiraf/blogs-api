const route = require('express').Router();
// const userValidation = require('../middlewares');
const { userController } = require('../controllers');
const { tokenValidation } = require('../middlewares');
const { userTokenValidation } = require('../middlewares');

route.post('/', userController.createUser);
route.get('/', tokenValidation, userTokenValidation, userController.findAllUsers);
route.get('/:id', tokenValidation, userTokenValidation, userController.findById);

module.exports = {
  route,
};