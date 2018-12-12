/**
 * @module app
 * @file The main file of app.
 * @version 1.0
 * @author Waldemar
 *
 * @requires express
 * @requires morgan
 * @requires body-parser
 * @requires middlewares/mainHandlers/corsHandler
 * @requires middlewares/errorHandlers
 * @requires routes/api/v1/main
 * @requires routes/api/v1/users
 * @requires routes/api/v1/indices
 * @requires routes/api/v1/posts
 */
const express = require("express");
const app = express();

const nodeEnv = process.env.NODE_ENV || "development";

const path = require("path");
const morgan = require("morgan");

const bodyParser = require("body-parser");

const corsHandler = require("./middlewares/mainHandlers/corsHandler");
const errorHandlers = require("./middlewares/errorHandlers");

const mainRoutes = require("./routes/api/v1/main");
const usersRoutes = require("./routes/api/v1/users");

let log;
if (nodeEnv === "production") {
	/**/
} else {
	log = "dev";
}

if (nodeEnv !== "test") app.use(morgan(log));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(corsHandler);

app.use("/static", express.static(path.join(__dirname, "../api_docs/swagger")));

app.use("/", mainRoutes);
app.use("/api/v1/users", usersRoutes);

app.use(errorHandlers.notFoundErrorHandler);

if (nodeEnv === "development") {
	app.use(errorHandlers.serverDevErrorHandler);
} else {
	app.use(errorHandlers.serverProdErrorHandler);
}

module.exports = app;
