var path = require('path');
 var webpack = require('webpack');
 module.exports = {
    mode: 'development',
     entry: ['./src/jsx/main.jsx'],
     output: {
         path: path.resolve(__dirname, './src'),
         filename: './js/main.js',
         publicPath: '/'
     },
     module: {
         rules: [
             {
                 test: /\.jsx$/,
                 loader: 'babel-loader',
                 options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['ie 11', 'last 2 versions', 'safari >= 7'],
                                },
                                modules: false,
                                loose: true
                            }
                        ],
                    ],
                    
                    plugins: [
                      ["@babel/transform-runtime"]
                    ]
                  }
             }
         ]
     },devServer: {
        contentBase: './src'
    },
     stats: {
         colors: true
     },
     devtool: 'none'
 };
