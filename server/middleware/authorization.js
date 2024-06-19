  const adminOnly = (req, res, next) => {
    try {
      if (req.user.role === "Admin") {
        next();
      }
    } catch (error) {
      next(error);
    }
  };

  module.exports = { adminOnly };
