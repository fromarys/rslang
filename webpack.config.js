const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

const listOfHtmlPages = ['index'];
const htmlPageLoader = listOfHtmlPages.map((pageName) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `./src/${pageName}.html`),
		filename: `${pageName}.html`,
		inject: 'body',
  });
});

const baseConfig = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
},
  module: {
    rules: [
      {
        test: /\.[tj]s$/i, 
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/images/[name]_[hash][ext][query]'
        },
      },
      {
        test: /\.(svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/icons/[name]_[hash][ext][query]'
        },
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    ...htmlPageLoader,
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename:'[hash].css'
    }),
    new EslintPlugin({ extensions: 'ts' }),
  ],
};

module.exports = ({ mode }) => {
  const isProductionMode = mode === 'prod';
  const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');
  return merge(baseConfig, envConfig);
};