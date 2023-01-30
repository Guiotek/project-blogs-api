const { User } = require('../models');

const getall = async () => {
const users = await User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});
return users;
};

const getOne = async (id) => {
  const user = await User.findOne({
    attributes: ['id', 'displayName', 'email', 'image'],
    where: { id },
  });
  return user;
  };

module.exports = {
  getall,
  getOne,
};