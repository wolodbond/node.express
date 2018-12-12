/**
 * Service module for get user by id
 * @module services/v1/users/getUsersService
 *
 * @requires models/user
 */

/**
 * get user by id
 * @param {string} id user id for get
 *
 * @returns {Promise} Promise object represents user object
 */
const getUsersService = id => {
	const User = require("../../../models/user");

	/**
	 * get user at mongo db
	 *
	 * @param    {Object} requestObject    with params:
	 * @property {string} _id              user id for get
	 *
	 * @returns {Promise} Promise object represents user object
	 */
	const result = User.findOne({ _id: id }).exec();

	return result;
};

module.exports = getUsersService;
