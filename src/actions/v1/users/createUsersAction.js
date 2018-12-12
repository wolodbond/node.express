/**
 * Action module for create user
 * @module actions/v1/posts/createUsersAction
 *
 * @requires services/v1/users/createUsersService
 * @requires middlewares/responseHandlers/users/createUsersResponseHandler
 * @requires middlewares/errorHandlers/notFoundErrorHandler *
 */
const createUsersService = require("../../../services/v1/users/createUsersService");
const createUsersResponseHandler = require("../../../middlewares/responseHandlers/users/createUsersResponseHandler");
const customServerErrorHadler = require("../../../middlewares/errorHandlers/customServerErrorHadler");

/**
 * Create user
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} 200 OK
 * @example
 * {
		"_id": "5bee9fc9d2a63b276b30812e",
		"username": "BlackIN",
		"firstName": "Black",
		"lastName": "Black",
		"email": "devid@afs.com",
		"password": "devid",
		"avatar": "devid",
		"userStatus": 1,
		"__v": 0
	}
 * @throws 422 Unprocessable Entity
 * @example
 * {
		"errors": [
			{
				"location": "body",
				"param": "email",
				"value": "devid",
				"msg": "email field: invalid data supplied"
			}
		]
	}
 * @throws 500 error code Internal server error occurs
 */
const createUsersAction = (req, res, next) => {
	createUsersService(req)
		.then(doc => {
			createUsersResponseHandler(doc, res);
		})
		.catch(err => {
			customServerErrorHadler(err, res);
		});
};

module.exports = createUsersAction;
