const route = require('express').Router();
const { categoryController } = require('../controllers');
const tokenValidation = require('../middlewares/tokenValidation');
const userTokenValidation = require('../middlewares/userTokenValidation');

route.post('/', tokenValidation, userTokenValidation, categoryController.createNewCategory);
route.get('/', tokenValidation, userTokenValidation, categoryController.getAllCategories);

module.exports = {
  route,
};