/**
 * Action module for update user
 * @module actions/v1/main/mainAction
 *
 * @requires fs
 */
const fs = require("fs");

/**
 * Handle hitting main route /
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} next next object middleware
 *
 * @returns {html} main html page
 * @throws 400 error code with message "Something wrong. Try again!""
 * @throws 500 error code Internal server error occurs
 */
const codeDocsAction = (req, res, next) => {
	res.writeHead(200, { "Content-type": "text/html" });
	fs.readFile("./main.html", null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write("File not found :(");
		} else {
			res.write(data);
		}
		res.end();
	});
};

module.exports = codeDocsAction;
