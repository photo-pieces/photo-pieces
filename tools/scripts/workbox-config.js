module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,js,css,svg,png,mp3,html}'],
    swDest: 'build/service-worker.js',
    clientsClaim: true,
    skipWaiting: true,
    offlineGoogleAnalytics: true,
    //cleanupOutdatedCaches: true,
    navigateFallback: '/index.html',
    navigateFallbackBlacklist: [/^\/api/],
    runtimeCaching: [
      {
        urlPattern: new RegExp('^https://picsum.photos/'),
        handler: 'cacheFirst',
        options: {
          cacheName: 'images',
          cacheableResponse: {
            statuses: [0, 200]
          },
          expiration: {
            maxEntries: 150,
          },
        },
      },
      {
        urlPattern: new RegExp('^https://(cdn.polyfill.io|fonts.gstatic.com|cdn.jsdelivr.net|fonts.googleapis.com)/'),
        handler: 'cacheFirst',
        options: {
          cacheName: 'external',
          expiration: {
            maxEntries: 50,
          },
          cacheableResponse: {
            statuses: [0, 200]
          },
        },
      }
    ],
  };