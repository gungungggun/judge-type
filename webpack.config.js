const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: __dirname + '/src/index.coffee',
  output: {
    filename: 'judge-type.js',
    path: __dirname + '/dist/',
    library: "JudgeType",
    libraryTarget: "umd"
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.coffee$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'coffee-loader',
            options: {
              transpile: {
                presets: ['es2015']
              }
            }
          }
        ]
      }
    ]
  }
};
