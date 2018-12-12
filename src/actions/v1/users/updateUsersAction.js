/**
 * Action module for update user
 * @module actions/v1/posts/updateUsersAction
 *
 * @requires services/v1/users/updateUsersService
 * @requires middlewares/responseHandlers/users/updateUsersResponseHandler
 * @requires middlewares/errorHandlers/notFoundErrorHandler
 */
const updateUsersService = require("../../../services/v1/users/updateUsersService");
const updateUsersResponseHandler = require("../../../middlewares/responseHandlers/users/updateUsersResponseHandler");
const notFoundErrorHandler = require("../../../middlewares/errorHandlers/notFoundErrorHandler");

/**
 * Update user
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} 200 OK
 * @example
 * {
    "n": 1,
    "nModified": 1,
    "ok": 1
}
 * @throws 404 Not Found
 * @example
 * {
		"error": {
			"message": "Cast to ObjectId failed for value \"5bc744743937401e60a0a77f5\" at path \"_id\" for model \"User\"",
			"name": "CastError",
			"stringValue": "\"5bc744743937401e60a0a77f5\"",
			"kind": "ObjectId",
			"value": "5bc744743937401e60a0a77f5",
			"path": "_id"
		}
	}
 */
const updateUsersAction = (req, res, next) => {
	const id = req.params.userId;
	const requestBody = req.body;

	updateUsersService(id, requestBody)
		.then(doc => {
			updateUsersResponseHandler(doc, res);
		})
		.catch(err => {
			notFoundErrorHandler(err, res);
		});
};

module.exports = updateUsersAction;
