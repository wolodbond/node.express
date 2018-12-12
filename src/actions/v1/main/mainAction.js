/**
 * Action module for update user
 * @module actions/v1/main/mainAction
 *
 * @requires fs
 */
const path = require("path");
const fs = require("fs");
const express = require("express");
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
const mainAction = (req, res, next) => {
	/*
	fs.readFile("../../../main.html", null, function(error, data) {
		if (error) {
			res.writeHead(404);
			res.write("File not found :(");
		} else {
			res.writeHead(200, { "Content-type": "text/html" });
			res.write(data);
		}
		res.end();
	});*/
	express.static(path.join("../../../", "main.html"));
};

module.exports = mainAction;
