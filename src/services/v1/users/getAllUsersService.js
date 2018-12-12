/**
 * Service module for get all users
 * @module services/v1/users/getAllUsersService
 *
 * @requires models/user
 */

/**
 * get all users
 *
 * @returns {Promise} Promise object represents user object
 */
const getAllUsersService = () => {
	const User = require("../../../models/user");

	/**
	 * get all users at mongo db
	 *
	 * @returns {Promise} Promise object represents user object
	 */
	const result = User.find()
		.select("username firstName lastName email userStatus")
		.exec();

	return result;
};

module.exports = getAllUsersService;
