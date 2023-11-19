const route = require('express').Router();
const loginController = require('../controllers');
const loginValidation = require('../middlewares');

route.post('/', loginValidation, loginController.login);

module.exports = {
  route,
};
