/**
 * module for handle serverDevErrorHandler
 * @module middlewares/errorHandlers/serverDevErrorHandler
 */
/**
 * handle serverDevErrorHandler
 * @param {Object} err error object
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} json object with status
 */
const serverDevErrorHandler = (err, req, res, next) => {
	res.status = err.status || 500;
	res.json({
		error: {
			message: err.message
		}
	});
};

module.exports = serverDevErrorHandler;
