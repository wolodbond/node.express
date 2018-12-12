/**
 * Service module for create user by id
 * @module services/v1/users/createUsersService
 *
 * @requires mongoose
 * @requires models/user
 */

/**
 * create user by id
 * @param {Object} request object with params for create
 *
 * @returns {Promise} Promise object represents user object
 */
const mongoose = require("mongoose");

const createUsersService = request => {
	const User = require("../../../models/user");

	/**
	 * create user at mongo db
	 *
	 * @param {Object} userObject
	 *
	 * @returns {Promise} Promise object represents user object
	 */
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
		username: request.body.username,
		firstName: request.body.firstName,
		lastName: request.body.lastName,
		email: request.body.email,
		password: request.body.password,
		avatar: request.body.avatar,
		userStatus: request.body.userStatus
	});
	const result = user.save();

	return result;
};

module.exports = createUsersService;
