/**
 * module for handle getUsersValidator
 * @module middlewares/validationHandlers/users/serverDevErrorHandler
 *
 * @requires express-validator/check
 */
/**
 * handle getUsersValidator
 */
const { check } = require("express-validator/check");

module.exports = [
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
