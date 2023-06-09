const { generateToken } = require('../utils/JWT');
const { User } = require('../models');

const authLogin = async ({ email, password }) => {
  if (!email || !password) {
    const error = new Error('Some required fields are missing');
    error.status = 400;
    throw error;
  }

  const user = await User.findOne({
    attributes: ['id', 'display_name', 'email', 'image'],
    where: { email, password },
  });

  if (!user) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw error;
  }

  const token = generateToken(user.dataValues);
  return { token };
};

module.exports = {
authLogin,
};