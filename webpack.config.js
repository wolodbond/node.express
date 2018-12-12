const path = require("path");
const Webpack = require("webpack");
const nodeExternals = require("webpack-node-externals");

module.exports = {
	target: "node",
	mode: "development",
	externals: [nodeExternals()],
	entry: {
		server: "./src/server.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "server.bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	/** for avoid uws error during building dist */
	plugins: [new Webpack.IgnorePlugin(/uws/)]
};
