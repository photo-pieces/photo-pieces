const images=[];

let imageId = 5;
const len = imageId+10;
for (; imageId < len; imageId++) {
  images.push(`https://picsum.photos/500/300/?${imageId}`);
}
module.exports = {
  staticFileGlobs: [
    "build/static/css/**.css",
    "build/static/js/**.js",
    "build/assets/icons/**.*",
    "build/assets/images/**.*"   
  ].concat(images),
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
