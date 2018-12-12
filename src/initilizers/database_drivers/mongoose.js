/**
 * Module provides methods for iteracting with db
 * @module initilizers/database_drivers/mongoose
 *
 * @requires assert
 * @requires mongoose
 * @requires configs/databases/mongo
 *
 * @mixin
 */
const assert = require("assert");
const mongoose = require("mongoose");
const dbConfig = require("../../configs/databases/mongo");

/** @constant {string} nodeEnv */
let nodeEnv;
/** @constant {Object} client */
let client;
/** @constant
    @type {string}
*/
let dbName;

/**
 * @function initDbConnect
 * for initilizing db connection
 */
const initDbConnect = async () => {
	nodeEnv = process.env.NODE_ENV || "development";

	const connectOptions =
		dbConfig[nodeEnv].protocol +
		"://" +
		dbConfig[nodeEnv].host +
		":" +
		dbConfig[nodeEnv].port +
		"/" +
		dbConfig[nodeEnv].database;

	await mongoose.connect(
		connectOptions,
		{ useNewUrlParser: true }
	);
	client = mongoose;
	console.log(
		dbConfig[nodeEnv].dialect +
			" client connected on " +
			dbConfig[nodeEnv].host +
			":" +
			dbConfig[nodeEnv].port
	);
	dbName = dbConfig[nodeEnv].database;
};

/**
 * @function getDbConnect
 * for getting db connection
 *
 * @returns {Object} client
 */
const getDbConnect = () => {
	assert.ok(
		client,
		`${
			dbConfig[nodeEnv].database
		} Db has not been initialized. Please called init first.`
	);

	return client;
};

/**
 * @function getDbName
 * for getting db name
 *
 * @returns {string} dbName
 */
const getDbName = () => {
	assert.ok(dbName, "Db name not been initialized. Please called init first.");

	return dbName;
};

/**
 * @function closeDbConnect
 * for closing db connection
 */
const closeDbConnect = async () => {
	await client.disconnect();
};

module.exports = { initDbConnect, getDbConnect, getDbName, closeDbConnect };
