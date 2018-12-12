/**
 * @module server
 * @file The main file of this server.
 * @version 1.0
 * @author Waldemar
 *
 * @requires http
 * @requires configs/env
 * @requires initilizers/database_drivers/redis
 * @requires initilizers/database_drivers/mongoose
 * @requires app
 */

const http = require("http");

if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}
const nodeEnv = process.env.NODE_ENV || "development";
const appConfig = require("./configs/env");

const redisDb = require("./initilizers/database_drivers/redis");
redisDb.initDbConnect();

const mongoDb = require("./initilizers/database_drivers/mongoose");
mongoDb.initDbConnect();

const app = require("./app");

const port = appConfig[nodeEnv].app.port;
const server = http.createServer(app);
server.listen(port);
console.log("Express server listening on port " + port);
