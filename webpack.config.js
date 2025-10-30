import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";

export default {
  mode: "development", // можно менять на "production" при сборке
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("dist"),
    clean: true, // очищает dist при каждой сборке
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // берёт твой HTML как шаблон
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: 8080,
    open: true, // автоматически откроет браузер
  },
};
