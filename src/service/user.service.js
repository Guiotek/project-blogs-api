const { User } = require('../models');

const getall = async () => {
const users = await User.findAll({
  attributes: ['id', 'displayName', 'email', 'image'],
});
return users;
};

module.exports = {
  getall,
};