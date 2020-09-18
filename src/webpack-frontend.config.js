const path = require("path");
const Dotenv = require("dotenv-webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const env = process.env.NODE_ENV || "development";
const srcDir = __dirname;
const rootDir = `${srcDir}/../`;
const frontendDir = `${srcDir}/frontend/`;
const dotEnvFile = `${rootDir}/.env.${env}`;

const cssModulesIdentifier = "[local]___[hash:10]";

module.exports = {
  mode: env === "development" ? "development" : "production",
  entry: `${frontendDir}/index.jsx`,
  output: {
    path: `${rootDir}/dist/frontend/`,
    publicPath: "/",
    filename: "[name].bundle.[hash].js",
  },
  devtool: env === "development" && "inline-source-map",
  stats: { children: false },
  performance: {
    hints: false,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                [
                  "babel-plugin-react-css-modules",
                  {
                    generateScopedName: cssModulesIdentifier,
                    filetypes: {
                      ".scss": {
                        syntax: "postcss-scss",
                      },
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.png$|\.jpe?g$|\.gif$|\.svg$|\.woff$|\.ttf$|\.woff2$|\.eot|\.ico$/,
        use: [
          {
            loader: `file-loader?name=assets/images/[name].[ext]&context=${frontendDir}`,
          },
        ],
      },
      {
        test: /\.pdf$/,
        use: [
          {
            loader: `file-loader?name=assets/files/[name].[ext]&context=${frontendDir}`,
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: env === "development",
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: cssModulesIdentifier,
              },
            },
          },
          "postcss-loader",
          "sass-loader",
          "resolve-url-loader",
        ],
      },
    ],
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "frontend/"),
    },

    extensions: [".js", ".jsx", ".json", ".scss"],
  },

  plugins: [
    new Dotenv({ path: dotEnvFile }),
    new HtmlWebpackPlugin({ template: `${frontendDir}/index.html` }),
    new CaseSensitivePathsPlugin(),
    new MiniCssExtractPlugin({ filename: "main.bundle.[hash].css" }),
  ],
};
