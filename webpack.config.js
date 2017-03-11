const webpack = require("webpack");

let production = process.env.NODE_ENV === "production";

let plugins = [
	new webpack.optimize.CommonsChunkPlugi({
		name: "main",
		children: true,
		minChunks: 2
	})
];

module.exports = {
	entry: "./src",
	output: {
		path: "builds",
		filename: "bundle.js",
		publicPath: "builds/"
	},
	plugins: plugins,
	module: {
		loaders: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				include: __dirname + "/src",
				query: {
					presets: ["es2015", "react"]
				}
			}
		]
	}
};