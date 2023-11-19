const { User } = require('../models');
const { generateToken } = require('../utils/jsonWebToken');

const login = async (email, password) => {
  const user = await User.findOne({
    where: { email, password },
    attributes: { exclude: password },
  });

  if (!user) {
    return { status: 400, data: { message: 'Invalid fields' },
    }; 
  }
  
  const token = generateToken({ ...user.dataValues });
  return { status: 200, data: { token } };
};

module.exports = {
  login,
};