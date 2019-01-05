const webpack = require('webpack');

module.exports = env => {
  return {
    context: __dirname + '/client',
    entry: './index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          loader: 'babel-loader',
          options: { presets: ['@babel/env'] }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader'
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            }
          ]
        }
      ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
      path: __dirname + '/public',
      filename: 'app.js'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.ENVIRONMENT': JSON.stringify(env.ENVIRONMENT || 'dev')
      })
    ]
  };
};
