/**
 * module for handle validationErrorsHandler
 * @module middlewares/errorHandlers/validationErrorsHandler
 *
 * @requires express-validator/check
 */
const { validationResult } = require("express-validator/check");
/**
 * handle validationErrorsHandler
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} json object with status
 */
const validationErrorsHandler = (req, res, next) => {
	// Finds the validation errors in this request and wraps them in an object with handy functions
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}
	next();
};

module.exports = validationErrorsHandler;
