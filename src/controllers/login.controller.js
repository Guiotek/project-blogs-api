const loginService = require('../service/login.service');

const authLogin = async (req, res) => {
  try {   
    const token = await loginService.authLogin(req.body);
    return res.status(200).json(token);
  } catch (error) {
    return res.status(error.status).json({ message: error.message });
  }
};

module.exports = {
authLogin,
};