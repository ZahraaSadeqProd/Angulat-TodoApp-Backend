const demoGuard = (req, res, next) => {
  if (req.user?.isDemo) {
    req.isDemo = true;
  }
  next();
};

module.exports = demoGuard;
