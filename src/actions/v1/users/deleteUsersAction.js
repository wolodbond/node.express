/**
 * Action module for delete user
 * @module actions/v1/posts/deleteUsersAction
 *
 * @requires services/v1/users/deleteUsersService
 * @requires middlewares/responseHandlers/users/deleteUsersResponseHandler
 * @requires middlewares/errorHandlers/notFoundErrorHandler
 */
const deleteUsersService = require("../../../services/v1/users/deleteUsersService");
const deleteUsersResponseHandler = require("../../../middlewares/responseHandlers/users/deleteUsersResponseHandler");
const notFoundErrorHandler = require("../../../middlewares/errorHandlers/notFoundErrorHandler");

/**
 * Delete user
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} 200 OK
 * @throws 404 Not Found for api/v1/users/
 * html
 * @throws 500 Internal Server Error for api/v1/users/33
 * {
    "error": {
        "message": "Cast to ObjectId failed for value \"33\" at path \"_id\" for model \"User\"",
        "name": "CastError",
        "stringValue": "\"33\"",
        "kind": "ObjectId",
        "value": "33",
        "path": "_id"
    }
}
 */
const deleteUsersAction = (req, res, next) => {
	const id = req.params.userId;

	deleteUsersService(id)
		.then(doc => {
			deleteUsersResponseHandler(doc, res);
		})
		.catch(err => {
			notFoundErrorHandler(err, res);
		});
};

module.exports = deleteUsersAction;
