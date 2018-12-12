/**
 * Response Handler module for get all users
 * @module middlewares/responseHandlers/users/getAllUsersResponseHandler
 */

/**
 * get all users Response Handler
 * @param {Object[]} docs service response objects array
 * @param {Object} res response object
 *
 * @returns {Object} Object user
 * @throws {Object} error status 400 with message "Something wrong. Try again!"
 */
const getAllUsersResponseHandler = (docs, res) => {
	if (docs) {
		const response = docs.map(doc => {
			return {
				_id: doc._id,
				username: doc.username,
				firstName: doc.firstName,
				lastName: doc.lastName,
				email: doc.email,
				userStatus: doc.userStatus
			};
		});
		res.status(200).json(response);
	} else {
		res.status(400).json({
			error: "Something wrong. Try again!"
		});
	}
};

module.exports = getAllUsersResponseHandler;
