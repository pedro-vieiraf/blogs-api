const jwt = require('jsonwebtoken');

const { SECRET_KEY } = process.env;

const generateToken = (payload) => jwt.sign(payload, SECRET_KEY);

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken = (token) => jwt.verify(token, SECRET_KEY);

module.exports = {
  generateToken,
  extractToken,
  verifyToken,
};