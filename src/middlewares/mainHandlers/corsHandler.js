/**
 * module for handle corsHandler
 * @module middlewares/mainHandlers/corsHandler
 */
/**
 * handle corsHandler
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {Object} json object with status
 */
const corsHandler = (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Origin",
		"Origin, X-Requested-With, Content-type, Accept, Authorization"
	);
	if (req.method == "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
		return res.status(200).json({});
	}
	next();
};

module.exports = corsHandler;
