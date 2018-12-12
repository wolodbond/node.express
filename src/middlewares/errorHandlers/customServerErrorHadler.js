/**
 * module for handle customServerErrorHadler
 * @module middlewares/errorHandlers/customServerErrorHadler
 */
/**
 * handle customServerErrorHadler
 * @param {Object} err error object
 * @param {Object} res response object
 *
 * @returns {Object} error object with status code
 */
const customServerErrorHadler = (err, res) => {
	let status = err.statusCode || err.status || 500;
	res.status(status).json({
		error: err
	});
};

module.exports = customServerErrorHadler;
