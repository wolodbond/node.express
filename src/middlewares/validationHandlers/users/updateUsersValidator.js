/**
 * module for handle updateUsersValidator
 * @module middlewares/validationHandlers/users/updateUsersValidator
 *
 * @requires express-validator/check
 */
/**
 * handle updateUsersValidator
 */
const { check } = require("express-validator/check");

module.exports = [
	check("userId")
		.exists()
		.withMessage("userId is required parameter"),
	check("userId")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("userId field: invalid data supplied"),
	check("username")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("username field: invalid data supplied"),
	check("firstName")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("firstName field: invalid data supplied"),
	check("lastName")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("lastName field: invalid data supplied"),
	check("email")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isEmail()
		.normalizeEmail()
		.withMessage("email field: invalid data supplied"),
	check("password")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.isLength({ min: 5 })
		.withMessage("password field: invalid data supplied"),
	check("avatar")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("avatar field: invalid data supplied"),
	check("userStatus")
		.optional()
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isInt([{ min: 0, max: 1 }])
		.withMessage("userStatus  field: invalid data supplied")
];
