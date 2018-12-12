/**
 * Response Handler module for update user
 * @module middlewares/responseHandlers/users/updateUsersResponseHandler
 */

/**
 * update user Response Handler
 * @param {Object} doc service response object
 * @param {Object} res response object
 *
 * @returns {Object} Object user
 * @throws {Object} error status 400 with message "Invalid User ID supplied"
 */
const updateUsersResponseHandler = (doc, res) => {
	if (doc) {
		res.status(200).json(doc);
	} else {
		res.status(400).json({
			error: "Invalid User ID supplied"
		});
	}
};

module.exports = updateUsersResponseHandler;
