/**
 * Action module for get swagger.json
 * @module actions/v1/main/apiDocsAction
 *
 * @requires fs
 */
const fs = require("fs");
//const jsonFie = require();

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
const apiDocsAction = (req, res, next) => {
	/*res.writeHead(200, { "Content-type": "application/json" });
	fs.readFile(".swagger.json", null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write("File not found :(");
		} else {
			res.write(data);
		}
		res.end();
	});*/
	//let file = fs.readFileSync("./swagger.json");
	//return JSON.parse(jsonFie);
	fs.readFile("./swagger.json", null, function(err, data) {
		res.json(JSON.parse(data));
		//return data;
	});
};

module.exports = apiDocsAction;
//./api_docs/swagger/
