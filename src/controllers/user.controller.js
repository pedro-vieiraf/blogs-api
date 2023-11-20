const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.createUser({ displayName, email, password, image });

  return res.status(response.status).json(response.data);
};

const findById = async (req, res) => {
  const { id } = req.body;
  const response = userService.findById(id);

  return res.status(response.status).json(response.data);
};

const findAllUsers = async (req, res) => {
  const response = await userService.findAllUsers();

  return res.status(response.status).json(response.data);
};

module.exports = {
  createUser,
  findById,
  findAllUsers,
};