/**
 * Service module for update user by id
 * @module services/v1/users/updateUsersService
 *
 * @requires models/user
 */

/**
 * update user by id
 * @param {string} id user id
 * @param {Object} requestBody object with params for update
 *
 * @returns {Promise} Promise object represents user object
 */
const updateUsersService = (id, requestBody) => {
	const User = require("../../../models/user");

	/**
	 * update user at mongo db
	 *
	 * @param    {Object} fristRequestObject        with params:
	 * @property {string} fristRequestObject._id    user id
	 * @param    {Object} secondRequestObject       with params:
	 * @property {Object} secondRequestObject.$set  object with params for update
	 *
	 * @returns {Promise} Promise object represents user object
	 */
	const result = User.update({ _id: id }, { $set: requestBody }).exec();

	return result;
};

module.exports = updateUsersService;
