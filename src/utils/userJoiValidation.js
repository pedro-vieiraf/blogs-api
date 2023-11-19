const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi.string().min(8).isRequired().message({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().isRequired().message({
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().min(6).isRequired.message({
    'string.min': '"password" length must be at least 6 characters long',
  }),
  image: Joi.string(),
});

// validações ficam em utils?
// meus erros estão certos assim?

module.exports = {
  userSchema,
};