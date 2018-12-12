/**
 * module for handle serverProdErrorHandler
 * @module middlewares/errorHandlers/serverProdErrorHandler
 */
/**
 * handle serverProdErrorHandler
 * @param {Object} err error object
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} json object with status
 */
const serverProdErrorHandler = (err, req, res, next) => {
	res.status = err.status || 500;
	res.json({
		error: {}
	});
};

module.exports = serverProdErrorHandler;
