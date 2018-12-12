/**
 * config module for redis
 * @module configs/databases/redis
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
		username: process.env.REDIS_USER_NAME || "root",
		password: process.env.REDIS_PW || null,
		database: process.env.REDIS_DB_NAME || null,
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		protocol: process.env.REDIS_PROTOCOL,
		dialect: process.env.REDIS_DIALECT
	},
	test: {
		username: process.env.REDIS_USER_NAME || "root",
		password: process.env.REDIS_PW || null,
		database: process.env.REDIS_DB_NAME_TEST,
		host: process.env.REDIS_HOST || "0.0.0.0",
		port: process.env.REDIS_PORT || "6379",
		protocol: process.env.REDIS_PROTOCOL || "redis",
		dialect: process.env.REDIS_DIALECT
	},
	production: {
		username: "admin",
		password: "password",
		database: "my_db",
		host: "xxx-xxxxx-x.com",
		port: "",
		protocol: "mongodb",
		dialect: process.env.REDIS_DIALECT
	}
};
