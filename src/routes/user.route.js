const route = require('express').Router();
// const userValidation = require('../middlewares');
const { userController } = require('../controllers');

route.post('/', userController.createUser);

module.exports = {
  route,
};