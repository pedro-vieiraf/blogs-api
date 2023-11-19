const userService = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = userService.createUser({ displayName, email, password, image });

  return res.status(response.status).json(response.data);
};

module.exports = {
  createUser,
};