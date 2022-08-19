const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const listOfHtmlPages = [['', 'index']];
const htmlPageLoader = listOfHtmlPages.map((page) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `./src/${page[0]}${page[1]}.html`),
		filename: `${page[1]}.html`,
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
    new CopyPlugin({
      patterns: [
        { 
          from: "public", to: "public",
          noErrorOnMissing: true,
        },
      ],
    }),
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