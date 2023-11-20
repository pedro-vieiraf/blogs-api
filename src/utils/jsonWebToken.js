const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const generateToken = (payload) => jwt.sign(payload, JWT_SECRET);

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  generateToken,
  extractToken,
  verifyToken,
};