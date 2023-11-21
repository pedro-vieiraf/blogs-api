const route = require('express').Router();
const { tokenValidation, userTokenValidation } = require('../middlewares');
const { postController } = require('../controllers');

route.post('/', tokenValidation, userTokenValidation, postController.createNewPost);

module.exports = {
  route,
};