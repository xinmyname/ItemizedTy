module.exports = {
	entry: './src/main.ts',
	output: {
		filename: 'itemize',
		path: __dirname + '/bin'
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js"]
	}
};