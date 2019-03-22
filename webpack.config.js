const path = require('path');
const marked = require("marked");
const renderer = new marked.Renderer();

module.exports = {
  entry: ['./src/main.js', './src/main.scss', './src/index.html'],
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.js'
  },
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
            {
              loader: 'file-loader',
              options: {
                name: 'index.html',
              }
            },
        ]
      },
      {
        test: /\.md$/,
        use: [
            {
                loader: "html-loader"
            },
            {
                loader: "markdown-loader",
                options: {
                    pedantic: true,
                    renderer
                }
            }
        ]
    },
      {
        test: /\.scss$/,
        use: [
					{
						loader: 'file-loader',
						options: {
							name: 'css/[name].css',
						}
					},
					{
						loader: 'extract-loader'
					},
					{
						loader: 'css-loader?-url'
					},
					{
						loader: 'sass-loader'
					}
				]
      }
    ]
  }
};