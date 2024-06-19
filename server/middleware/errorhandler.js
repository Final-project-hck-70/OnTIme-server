function errorHandler(err, req, res, next) {
  console.log(err);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      return;
    case "InvalidLogin":
      res.status(401).json({ message: "Email/Password Invalid" });
      return;
    case "InvalidToken":
    case "JsonWebTokenError":
      res.status(401).json({ message: "Invalid Token" });

    default:
      res.status(500).json({ message: "Internal Server Error" });
      return;
  }
}

module.exports = errorHandler;
