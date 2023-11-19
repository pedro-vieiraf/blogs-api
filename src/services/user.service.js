const { User } = require('../models');
const { generateToken } = require('../utils/jsonWebToken');
const { userSchema } = require('../utils/userJoiValidation');

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  return user;
};

const createUser = async ({ displayName, email, password, image = '' }) => {
  const user = { displayName, email, password, image };
  
  const { error } = userSchema.validate(user);
  if (error) return { status: 400, data: { message: error.message } };

  const checkExistence = findByEmail(email);
  if (checkExistence) return { status: 409, data: { message: 'User already registered' } };
  
  const newUser = await User.create(user, {
    attributes: { exclude: [password] },
  });

  const token = generateToken({ ...newUser.dataValues });

  return { status: 201, data: { token } };
};

module.exports = {
  findByEmail,
  createUser,
};