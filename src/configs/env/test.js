/**
 * config module for test
 * @module configs/env/test
 *
 * @property {Object} app depends of environment config object with params:
 * @property {string} app.base_url
 * @property {number} app.port
 */
/*
const path = require("path");
const logPath = path.join(__dirname, "../../logs/test.log");
*/
module.exports = {
	app: {
		base_url: process.env.BASE_URL,
		port: process.env.PORT
	}
	/*
	facebook: {
		clientID: "APP_ID",
		clientSecret: "SECRET",
		callbackURL: "http://localhost:3000/auth/facebook/callback",
		scope: ["email", "user_about_me", "user_friends"]
	},
	google: {
		clientID: "APP_ID",
		clientSecret: "SECRET",
		callbackURL: "http://localhost:3000/auth/google/callback",
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.google.com/m8/feeds"
		]
	},
	logging: {
		appenders: [{ type: "console" }, { type: "file", filename: logPath }]
	}*/
};
