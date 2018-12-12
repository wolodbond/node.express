/**
 * module for handle deleteUsersValidator
 * @module middlewares/validationHandlers/users/serverDevErrorHandler
 *
 * @requires express-validator/check
 */
/**
 * handle deleteUsersValidator
 */
const { check } = require("express-validator/check");

module.exports = [
	//TODO express retake this error, check out why
	check("userId")
		.exists()
		.withMessage("user id is required parameter"),
	check("userId")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("id field: invalid data supplied")
];
