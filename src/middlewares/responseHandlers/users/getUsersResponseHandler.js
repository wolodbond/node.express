/**
 * Response Handler module for get user
 * @module middlewares/responseHandlers/users/getUsersResponseHandler
 */

/**
 * get user Response Handler
 * @param {Object} doc service response object
 * @param {Object} res response object
 *
 * @returns {Object} Object user
 * @throws {Object} error status 400 with message "Invalid User data supplied"
 */
const getUsersResponseHandler = (doc, res) => {
	if (doc) {
		res.status(200).json(doc);
	} else {
		res.status(400).json({
			error: "Invalid User ID supplied"
		});
	}
};

module.exports = getUsersResponseHandler;
