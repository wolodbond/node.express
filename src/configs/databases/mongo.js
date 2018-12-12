/**
 * config module for mongodb
 * @module configs/databases/mongo
 *
 * @property {Object} depends of environment config object with params:
 * @property {string} configObject.username
 * @property {string} configObject.password
 * @property {string} configObject.database
 * @property {string} configObject.host
 * @property {string} configObject.port
 * @property {string} configObject.protocol
 * @property {string} configObject.dialect
 */
module.exports = {
	development: {
		username: process.env.MONGO_USER_NAME || "root",
		password: process.env.MONGO_PW || null,
		database: process.env.MONGO_DB_NAME,
		host: process.env.MONGO_HOST,
		port: process.env.MONGO_PORT,
		protocol: process.env.MONGO_PROTOCOL,
		dialect: process.env.MONGO_DIALECT
	},
	test: {
		username: process.env.MONGO_USER_NAME || "root",
		password: process.env.MONGO_PW || null,
		database: process.env.MONGO_DB_NAME_TEST,
		host: process.env.MONGO_HOST || "127.0.0.1",
		port: process.env.MONGO_PORT || "27017",
		protocol: process.env.MONGO_PROTOCOL || "mongodb",
		dialect: process.env.MONGO_DIALECT
	},
	production: {
		username: "admin",
		password: "password",
		database: "my_db",
		host: "xxx-xxxxx-x.com",
		port: "",
		protocol: "mongodb",
		dialect: process.env.MONGO_DIALECT
	}
};
