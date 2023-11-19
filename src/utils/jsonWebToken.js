const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

module.exports = {
  generateToken,
};