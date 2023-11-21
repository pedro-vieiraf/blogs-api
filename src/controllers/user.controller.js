const { userService } = require('../services');

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await userService.createUser({ displayName, email, password, image });

  return res.status(response.status).json(response.data);
};

const findById = async (req, res) => {
  const { id } = req.params;
  const response = await userService.findById(id);

  return res.status(response.status).json(response.data);
};

const findAllUsers = async (req, res) => {
  const response = await userService.findAllUsers();

  return res.status(response.status).json(response.data);
};

const deleteUser = async (req, res) => {
  const { user } = req;
  const response = await userService.deleteUser(user.id);

  return res.status(response.status).send();
};

module.exports = {
  createUser,
  findById,
  findAllUsers,
  deleteUser,
};