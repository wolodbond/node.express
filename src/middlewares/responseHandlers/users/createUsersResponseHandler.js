/**
 * Response Handler module for create user
 * @module middlewares/responseHandlers/users/createUsersResponseHandler
 */

/**
 * create user Response Handler
 * @param {Object} doc service response object
 * @param {Object} res response object
 *
 * @returns {Object} Object user
 * @throws {Object} error status 400 with message "Invalid User data supplied"
 */
const createUsersResponseHandler = (doc, res) => {
	if (doc) {
		res.status(201).json(doc);
	} else {
		res.status(400).json({
			error: "Invalid User data supplied"
		});
	}
};

module.exports = createUsersResponseHandler;
