const loginService = require('../services');

const login = (req, res) => {
  const { email, password } = req.body;
  const response = loginService(email, password);

  return res.status(response.status).json(response.data);
};

module.exports = {
  login,
};