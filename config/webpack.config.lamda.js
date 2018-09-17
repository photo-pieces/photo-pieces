'use strict';

const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

class ServerMiniCssExtractPlugin extends MiniCssExtractPlugin {
  getCssChunkObject(mainChunk) {
    return {};
  }
}
const getStyleLoaders = (cssOptions, preProcessor) => {
  const loaders = [{ loader: ServerMiniCssExtractPlugin.loader }, { loader: require.resolve("css-loader"), options: cssOptions }, { loader: require.resolve("postcss-loader"), options: { ident: "postcss", plugins: () => [require("postcss-flexbugs-fixes"), autoprefixer(
            {
              flexbox: "no-2009"
            }
          )], sourceMap: false } }];
  if (preProcessor) {
    loaders.push({
      loader: require.resolve(preProcessor),
      options: {
        sourceMap: false,
      },
    });
  }
  return loaders;
};

module.exports = {
  mode: "development",
  resolve: {
    modules: ["node_modules", "src"],
    extensions: [".web.js", ".mjs", ".js", ".json", ".web.jsx", ".jsx"]
  },
  plugins:[
    new ServerMiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),
  ],
  module: {
    rules: [
      {
        oneOf: [
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve("url-loader"),
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]"
            }
          },
          {
            test: /\.(js|jsx|mjs)$/,
            //include: paths.srcPaths,
            exclude: [/[/\\\\]node_modules[/\\\\]/],
            use: [
              require.resolve("thread-loader"),
              {
                loader: require.resolve("babel-loader"),
                options: {
                  presets: [require.resolve("babel-preset-react-app")],
                  plugins: [
                    [
                      require.resolve("babel-plugin-named-asset-import"),
                      {
                        loaderMap: {
                          svg: {
                            ReactComponent: "svgr/webpack![path]"
                          }
                        }
                      }
                    ]
                  ],
                  compact: true,
                  highlightCode: true
                }
              }
            ]
          },
          {
            test: /\.js$/,
            use: [
              require.resolve("thread-loader"),
              {
                loader: require.resolve("babel-loader"),
                options: {
                  babelrc: false,
                  compact: false,
                  presets: [
                    require.resolve("babel-preset-react-app/dependencies")
                  ],
                  cacheDirectory: true,
                  highlightCode: true
                }
              }
            ]
          },
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            loader: getStyleLoaders({
              importLoaders: 1,
              sourceMap: false
            })
          },
          {
            test: cssModuleRegex,
            loader: getStyleLoaders({
              importLoaders: 1,
              sourceMap: false,
              modules: true,
              getLocalIdent: getCSSModuleLocalIdent
            })
          },
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            loader: getStyleLoaders(
              {
                importLoaders: 2,
                sourceMap: false
              },
              "sass-loader"
            )
          },
          {
            test: sassModuleRegex,
            loader: getStyleLoaders(
              {
                importLoaders: 2,
                sourceMap: false,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent
              },
              "sass-loader"
            )
          },
          {
            loader: require.resolve("file-loader"),
            exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
            options: {
              name: "static/media/[name].[hash:8].[ext]"
            }
          }
        ]
      }
    ]
  }
};
