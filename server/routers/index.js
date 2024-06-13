const express = require("express");
const router = express.Router();
const { authentication } = require("../middleware/authentication");
const attendanceRouter = require("./attendanceRouter");
const userRouter = require("./userRouter");
const leaveRouter = require("./leaveRouter");
const overtimeRouter = require("./overtimeRouter");
const UserController = require("../controllers/userController");
const { adminOnly } = require("../middleware/authorization");

router.post("/login", UserController.postlogin);

router.use(authentication);

router.post("/add-user", adminOnly, UserController.addUser);

router.use("/attendances", attendanceRouter);

router.use("/users", userRouter);

router.use("/leaves", leaveRouter);

router.use("/overtimes", overtimeRouter);

module.exports = router;
