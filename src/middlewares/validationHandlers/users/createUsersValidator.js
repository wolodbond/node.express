/**
 * module for handle createUsersValidator
 * @module middlewares/validationHandlers/users/createUsersValidator
 *
 * @requires express-validator/check
 */
/**
 * handle createUsersValidator
 */
const { check } = require("express-validator/check");

module.exports = [
	/*	check("username")
		.exists()
		.withMessage("username is required parameter"),
	check("username")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("username field: invalid data supplied"),
	check("firstName")
		.exists()
		.withMessage("firstName is required parameter"),
	check("firstName")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("firstName field: invalid data supplied"),
	check("lastName")
		.exists()
		.withMessage("lastName is required parameter"),
	check("lastName")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isString()
		.withMessage("lastName field: invalid data supplied"),
	check("email")
		.exists()
		.withMessage("email is required parameter"),
	check("email")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isEmail()
		.normalizeEmail()
		.withMessage("email field: invalid data supplied"),
	check("password")
		.exists()
		.withMessage("password is required parameter"),
	check("password")
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
		.exists()
		.withMessage("userStatus is required parameter"),
	check("userStatus")
		.not()
		.isEmpty()
		.trim()
		.escape()
		.isInt([{ min: 0, max: 1 }])
		.withMessage("userStatus  field: invalid data supplied")*/
];
