/**
 * Service module for delete user by id
 * @module services/v1/users/deleteUsersService
 *
 * @requires models/user
 */

/**
 * delete user by id
 * @param {string} id user id for delete
 *
 * @returns {Promise} Promise object represents user object
 */
const deleteUsersService = id => {
	const User = require("../../../models/user");

	/**
	 * delete user at mongo db
	 *
	 * @param    {Object} requestObject    with params:
	 * @property {string} _id              user id for delete
	 *
	 * @returns {Promise} Promise object represents user object
	 */
	const result = User.remove({ _id: id }).exec();

	return result;
};

module.exports = deleteUsersService;
