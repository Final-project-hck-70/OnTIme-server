const adminOnly = (req, res, next) => {
  try {
    if (req.user.role === "Admin") {
      next();
    } else {
      throw { name: "forbidden" };
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { adminOnly };
