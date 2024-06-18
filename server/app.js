const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routers"));

app.use(errorHandler);

module.exports = app;
