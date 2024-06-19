function errorHandler(err, req, res, next) {
  console.log(err);
  switch (err.name) {
    case "SequelizeValidationError":
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      return;
    case "EmailEmpty":
      res.status(400).json({ message: "Email required" });
      return;
    case "PasswordEmpty":
      res.status(400).json({ message: "Password required" });
      return;
    case "forbidden":
      res.status(403).json({ message: "Admin only" });
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
