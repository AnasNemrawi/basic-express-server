"use strict";
require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT;

//   requirements
const internalError = require("./error-handlers/500");
const pageNotFound = require("./error-handlers/404");
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
// global middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.get("/", (req, res) => {
    res.status(200).send("server home page");
});

app.get("/person", validator, (req, res) => {
    const name = req.query.name;
    res.status(200).json({ name: name });
});

// error middlewares
app.use(internalError);
app.use("*", pageNotFound);

// ----------
function start(port) {
    app.listen(port, () => {
        console.log(`server is running on ${port}`);
    });
}

module.exports = {
    port: port,
    app: app,
    start: start,
};
