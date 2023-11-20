const { loginService } = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await loginService.login({ email, password });

  return res.status(response.status).json(response.data);
};

module.exports = {
  login,
};