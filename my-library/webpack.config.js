const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const PeerDepsExternalsPlugin = require('peer-deps-externals-webpack-plugin');
const merge = require('webpack-merge');


const common = {
  entry: './src/index.js',
  output: {
    filename: 'my-library.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new PeerDepsExternalsPlugin(),
  ],
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const umdOutput = {
  output: {
    path: path.resolve(__dirname, 'dist-webpack/umd'),
    libraryTarget: 'umd',
    library: 'myLibrary',
  },
};

const cjsOutput = {
  output: {
    path: path.resolve(__dirname, 'dist-webpack/cjs'),
    libraryTarget: 'commonjs2',
    library: 'myLibrary',
  },
};

const systemOutput = {
  output: {
    path: path.resolve(__dirname, 'dist-webpack/system'),
    libraryTarget: 'system',
  },
};

module.exports = [
  merge(common, umdOutput),
  merge(common, cjsOutput),
  merge(common, systemOutput),
];
