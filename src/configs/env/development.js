/**
 * config module for development
 * @module configs/env/development
 *
 * @property {Object} app depends of environment config object with params:
 * @property {string} app.base_url
 * @property {number} app.port
 */
module.exports = {
	app: {
		base_url: process.env.BASE_URL,
		port: process.env.PORT
	}
};
