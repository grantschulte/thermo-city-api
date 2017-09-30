const app    = require("express")();
const cors   = require("cors");
const config = require("dotenv").config();
const morgan = require("morgan");
const routes = require("./routes");
const errors = require("./utils/errors");

// CORS

app.use(cors());

// Logging

app.use(morgan("tiny"));

// Routes

app.use("/", routes);

// Errors

app.use(errors.errorHandler);

// Exports

module.exports = app;
