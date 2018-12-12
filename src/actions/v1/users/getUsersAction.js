/**
 * Action module for get user
 * @module actions/v1/posts/getUsersAction
 *
 * @requires services/v1/users/getUsersService
 * @requires middlewares/responseHandlers/users/getUsersResponseHandler
 * @requires middlewares/errorHandlers/notFoundErrorHandler
 */
const getUsersService = require("../../../services/v1/users/getUsersService");
const getUsersResponseHandler = require("../../../middlewares/responseHandlers/users/getUsersResponseHandler");
const notFoundErrorHandler = require("../../../middlewares/errorHandlers/notFoundErrorHandler");

/**
 * Get user
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object}  200 OK
 * @throws 404 Not Found for wrong id api/v1/users/5bc744743937401e60a0a77fd
 * {
		"message": "Cast to ObjectId failed for value \"5bc744743937401e60a0a77fd\" at path \"_id\" for model \"User\"",
		"name": "CastError",
		"stringValue": "\"5bc744743937401e60a0a77fd\"",
		"kind": "ObjectId",
		"value": "5bc744743937401e60a0a77fd",
		"path": "_id"
	}
 * @throws 500 Internal Server Error
 */
const getUsersAction = (req, res, next) => {
	const id = req.params.userId;

	getUsersService(id)
		.then(doc => {
			getUsersResponseHandler(doc, res);
		})
		.catch(err => {
			notFoundErrorHandler(err, req, res, next);
		});
};

module.exports = getUsersAction;
