/**
 * Module provides methods for iteracting with db
 * @module initilizers/database_drivers/redis
 *
 * @requires assert
 * @requires redis
 * @requires configs/databases/redis
 *
 * @mixin
 */
const assert = require("assert");
const redis = require("redis");
const dbConfig = require("../../configs/databases/redis");

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

	const connectOptions = {
		host: dbConfig[nodeEnv].host,
		port: dbConfig[nodeEnv].port
	};

	client = await redis.createClient(connectOptions);
	client.on("connect", function() {
		console.log(
			dbConfig[nodeEnv].dialect +
				" client connected on " +
				dbConfig[nodeEnv].host +
				":" +
				dbConfig[nodeEnv].port
		);
	});
	client.on("error", function(err) {
		console.log(
			"error event - " +
				connectOptions.host +
				":" +
				connectOptions.port +
				" - " +
				err
		);
	});

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
	await client.quit();
};

module.exports = { initDbConnect, getDbConnect, getDbName, closeDbConnect };
