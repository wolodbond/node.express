/**
 * Action module for get all users
 * @module actions/v1/posts/getAllUsersAction
 *
 * @requires services/v1/users/getAllUsersService
 * @requires middlewares/responseHandlers/users/getAllUsersResponseHandler
 * @requires middlewares/errorHandlers/notFoundErrorHandler
 */
const getAllUsersService = require("../../../services/v1/users/getAllUsersService");
const getAllUsersResponseHandler = require("../../../middlewares/responseHandlers/users/getAllUsersResponseHandler");
const customServerErrorHadler = require("../../../middlewares/errorHandlers/customServerErrorHadler");

/**
 * Get all users
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Array}  200 OK
 * @throws 400 error code with message "Something wrong. Try again!""
 * @throws 500 error code Internal server error occurs
 */
const getAllUsersAction = (req, res, next) => {
	getAllUsersService()
		.then(docs => {
			getAllUsersResponseHandler(docs, res);
		})
		.catch(err => {
			customServerErrorHadler(err, res);
		});
};

module.exports = getAllUsersAction;
