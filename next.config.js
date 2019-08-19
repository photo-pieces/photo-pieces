require("dotenv").config();
const path = require("path");
const withSass = require("@zeit/next-sass");
const withTM = require('./next-plugin-transpile-modules');

const config =  withTM({
  transpileModules: ['react-dnd','dnd-core'],externals:[]
});
const withSassConfig = withSass({
  ...config,
  cssModules: true
});

module.exports = withSassConfig;
