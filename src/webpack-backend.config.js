const fs = require("fs");
const Dotenv = require("dotenv-webpack");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

const env = process.env.NODE_ENV || "development";
const mode = env === "production" ? "production" : "development";
const srcDir = __dirname;
const rootDir = `${srcDir}/../`;
const dotEnvFile = `${rootDir}/.env.${env}`;
const backendDir = `${srcDir}/backend`;

const entry = `${backendDir}/server-runner.js`;
const outputFilename = "bundled-server-runner.js";

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter((x) => [".bin"].indexOf(x) === -1)
  .forEach((mod) => {
    nodeModules[mod] = `commonjs ${mod}`;
  });

module.exports = {
  mode,
  target: "node",
  entry,
  output: {
    path: env === "production" ? `${rootDir}/dist/backend/` : `${rootDir}/.tmp/backend/`,
    publicPath: "/",
    filename: outputFilename,
  },
  node: {
    __dirname: false,
    __filename: false,
  },

  module: {
    rules: [
      {
        test: /(\.js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "current",
                    },
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [new Dotenv({ path: dotEnvFile }), new CaseSensitivePathsPlugin()],

  resolve: {
    modules: [backendDir, srcDir, rootDir, "node_modules"],
  },

  externals: nodeModules,

  optimization: {
    minimize: false,
  },
};
