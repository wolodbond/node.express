/**
 * Response Handler module for delete user
 * @module middlewares/responseHandlers/users/deleteUsersResponseHandler
 */

/**
 * delete user Response Handler
 * @param {Object} doc service response object
 * @param {Object} res response object
 *
 * @returns {Object} Object user
 */
const deleteUsersResponseHandler = (doc, res) => {
	if (doc) {
		res.status(200).json();
	}
};

module.exports = deleteUsersResponseHandler;
