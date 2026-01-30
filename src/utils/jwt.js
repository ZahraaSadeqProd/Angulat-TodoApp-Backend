const jwt = require('jsonwebtoken');

/**
 * Generates JWT token for user authentication
 * - Encodes user ID, role, and demo flag in payload
 * - Signs token with JWT_SECRET from environment
 * - Sets expiration time from JWT_EXPIRES_IN environment variable
 * @param {Object} user - User object with _id, role, and isDemo properties
 * @returns {string} Signed JWT token
 */
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
      isDemo: user.isDemo
    },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );
};

module.exports = { generateToken };
