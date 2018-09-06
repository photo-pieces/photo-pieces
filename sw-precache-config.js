
module.exports = {
  staticFileGlobs: [
    "build/static/css/**.css",
    "build/static/js/**.js",
    "build/assets/icons/**.*",
    "build/assets/images/**.*",
    "https://picsum.photos/300/300/?5"
  ],
  swFilePath: "./build/service-worker.js",
  //   templateFilePath: "./service-worker.tmpl",
  stripPrefix: "build/",
  handleFetch: false,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/picsum\.photos/,
      handler: "fastest"
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: "fastest"
    },
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net/,
      handler: "fastest"
    },
    {
      urlPattern: /.*?(\/assets\/icons\/)/,
      handler: "fastest"
    }
  ]
};
