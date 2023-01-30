const userService = require('../service/user.service');

const getAll = async (_req, res) => {
const users = await userService.getall();
  return res.status(200).json(users);
};

module.exports = {
getAll,
};