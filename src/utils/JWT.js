const jwt = require('jsonwebtoken');

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = ({ id, email, displayName, image }) => jwt.sign(
  { id, email, displayName, image }, TOKEN_SECRET,
);

  const validateToken = async (token) => {
    if (!token) {
      const error = new Error('Token not found');
      error.status = 401;
      throw error;
    }

    try {
      const decryptedData = await jwt.verify(token, TOKEN_SECRET);
      return decryptedData;
    } catch (err) {
      const error = new Error('Expired or invalid token');
      error.status = 401;
      throw error;
    }
  };

  module.exports = {
    validateToken,
    generateToken,
  };