/**
 * module for handle notFoundErrorHandler
 * @module middlewares/errorHandlers/notFoundErrorHandler
 */
/**
 * handle notFoundErrorHandler
 * @param {Object} err error object
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} json object with status
 */
const notFoundErrorHandler = (err, req, res, next) => {
	let status = err.statusCode || err.status || 404;
	res.status(status).json({
		error: err
	});
};

module.exports = notFoundErrorHandler;
