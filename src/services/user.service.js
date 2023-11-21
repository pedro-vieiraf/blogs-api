const { User } = require('../models');
const { generateToken } = require('../utils/jsonWebToken');
const { userSchema } = require('../utils/userJoiValidation');

const findAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  console.log('users aqui', users);
  return { status: 200, data: users };
};

const findByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
  });

  return user;
};

const findById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  console.log('user? =>', user);
  if (!user) {
    return { status: 404, data: { message: 'User does not exist' } };
  }
  return { status: 200, data: user };
};

const createUser = async ({ displayName, email, password, image = '' }) => {
  const user = { displayName, email, password, image };
  
  const { error } = userSchema.validate(user);
  if (error) return { status: 400, data: { message: error.message } };
 
  const checkExistence = await findByEmail(email);

  if (checkExistence) return { status: 409, data: { message: 'User already registered' } };
  
  const newUser = await User.create(user, {
    attributes: { exclude: [password] },
  });

  const token = generateToken({ ...newUser.dataValues });

  return { status: 201, data: { token } };
};

module.exports = {
  findByEmail,
  findById,
  createUser,
  findAllUsers,
};