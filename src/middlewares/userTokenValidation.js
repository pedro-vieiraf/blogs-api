const { userService } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.user;

  const user = await userService.findById(id);

  if (!user) {
    return res.status(401).json({ message: 'User not found' });
  }

  next();
};
