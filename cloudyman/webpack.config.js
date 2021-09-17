import path from 'path';

const __dirname = import.meta.url.slice(7, import.meta.url.lastIndexOf('/'));

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/public/dist');

export default {
  mode: 'development',
  entry: `${SRC_DIR}/index.js`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: 'current',
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
      },
      {
        test: /\.(png|ttf|jp(e*)g|svg)$/,
        loader: 'url-loader?limit=100000&name=img/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.mjs', '.cjs', '.tsx', '.ts'],
  },
  devtool: 'inline-source-map',
};