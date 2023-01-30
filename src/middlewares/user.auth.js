const { validateToken } = require('../utils/JWT');

const authUser = async (req, res, next) => {
  const { authorization } = req.headers;
  try {
  await validateToken(authorization);
  return next();
} catch (error) {
  return res.status(error.status).json({ message: error.message });
}
};

module.exports = authUser;