module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,js,css,svg,png,mp3,html}'],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    offlineGoogleAnalytics: true,
    navigateFallback: '/index.html',
    navigateFallbackBlacklist: [/^\/api/],
    runtimeCaching: [
      {
        urlPattern: /picsum.photos/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 50,
          },
        },
      },
      {
        urlPattern: /(cdn.polyfill.io|fonts.gstatic.com|cdn.jsdelivr.net|fonts.googleapis.com)/,
        handler: 'cacheFirst',
        options: {
          cacheName: 'external',
          expiration: {
            maxEntries: 50,
          },
        },
      }
    ],
  };