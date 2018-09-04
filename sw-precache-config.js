module.exports = {
  staticFileGlobs: [
    "build/static/css/**.css",
    "build/static/js/**.js",
    "build/assets/icons/**.*",
    "build/assets/images/**.*"
  ],
  swFilePath: "./build/service-worker.js",
  //   templateFilePath: "./service-worker.tmpl",
  stripPrefix: "build/",
  handleFetch: false,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/picsum\.photos/,
      handler: "fastest"
    }
  ]
};
