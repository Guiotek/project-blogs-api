const userService = require('../service/user.service');

const getAll = async (_req, res) => {
const users = await userService.getall();
  return res.status(200).json(users);
};

const getOne = async (req, res) => {
const { id } = req.params; 
const user = await userService.getOne(id);
if (!user) {
  return res.status(404).json({ message: 'User does not exist' });
}
  return res.status(200).json(user);
};

module.exports = {
getAll,
getOne,
};