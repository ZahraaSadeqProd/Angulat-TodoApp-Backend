/**
 * Demo Guard Middleware
 * Flags demo user requests for potential special handling
 * - Checks if authenticated user has isDemo flag
 * - Sets request-level flag for downstream middleware/controllers
 * - Allows demo users same access as regular users (currently)
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function
 */
const demoGuard = (req, res, next) => {
  if (req.user?.isDemo) {
    req.isDemo = true;
  }
  next();
};

module.exports = demoGuard;
