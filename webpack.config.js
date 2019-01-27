var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');



let config = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'assets/js/build.js',
		publicPath: 'dist/'
	},

	devServer: {
		overlay:true
	},
	module:{
		rules:[
			{
				 test: /\.scss$/,
				 use: [
					 MiniCssExtractPlugin.loader,
	        {
	            loader: "css-loader",
	            options: {
	                minimize: {
	                    safe: true
	                }
	            }
	        },
					 {
					 loader: "sass-loader",
					 options: {}
			 }
				 ]
			 },
			{
				test: /\.js$/,
				loader: 'babel-loader',
			},
		    {
		        test: /\.css$/,
		        use: [

				          MiniCssExtractPlugin.loader,
				          'css-loader'
				        ]
		    },
				{
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
		],
	},
	plugins: [
			new MiniCssExtractPlugin({
      	filename: 'assets/css/style.css'
	    })
 	],
	resolve: {}
}


module.exports = (env,options) => {
	let mode = options.mode === 'production';
	config.devtool = mode ? false  : 'eval-sourcemap';

	return config;
}
