const { extractToken, verifyToken } = require('../utils/jsonWebToken');

module.exports = async (req, res, next) => {
  const { authorization } = req.header;
  if (!authorization || authorization === '') {
    return res.status(401).json({ error: 'Token not found' });
  }
  
  try {
    const token = extractToken(authorization);
    const decoded = verifyToken(token);
    req.user = decoded.data;

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};