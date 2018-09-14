
module.exports = {
  staticFileGlobs: [
    "build/index.html",
    "build/static/css/**.css",
    "build/static/js/**.js",
    "build/assets/icons/**.*",
    "build/assets/images/**.*",
    "build/assets/audio/**.*",
    "https://picsum.photos/300/300/?5"
  ],
  swFilePath: "./build/service-worker.js",
  //   templateFilePath: "./service-worker.tmpl",
  stripPrefix: "build/",
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/picsum\.photos/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /^https:\/\/fonts\.googleapis\.com/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /^https:\/\/fonts\.gstatic\.com/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /.*?(\/assets\/icons\/)/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /.*?(\/assets\/images\/)/,
      handler: "cacheFirst"
    },
    {
      urlPattern: /.*?(\/assets\/audio\/)/,
      handler: "cacheFirst"
    }
  ]
};
