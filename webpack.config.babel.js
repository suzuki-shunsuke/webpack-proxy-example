import path from 'path';
import webpack from 'webpack';
import config from './config.js';

export default {
  entry: 'entry',
  devtool: '#inline-source-map',
  devServer: {
    hot: true,
    host: '0.0.0.0',
    contentBase: 'src/static/js',
    publicPath: '/static/dist',
    port: config.WEBPACK_PORT,
    proxy: {
      '**': {
        target: `http://localhost:${config.APP_PORT}`,
        secure: false,
        bypass(req, res, proxyOptions) {
          const path = req.path;
          if (! path.match(/\/static\//)) {
            return false;
          }
        }
      }
    }
  },
  resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    root: [path.resolve('./src/static/js')],
  },
  output: {
    path: path.join(__dirname, 'src/static/dist'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }],
  },
};
