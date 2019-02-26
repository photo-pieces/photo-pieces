const { parse } = require("url");
const atob = require("atob");
module.exports = function(req, res) {
  const {
    query: { stats }
  } = parse(req.url, true);
  const { levels = 0, total = 0 } = JSON.parse(atob(stats));

  const html = `
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <meta name="theme-color" content="#000000">

            <link rel="icon" type="image/png" href="/assets/icons/icon.png"/>
            <link rel="shortcut icon" href="/assets/icons/icon.png">

            <title>Play Photo Pieces</title>
            <meta name="description" content="Play Photo Pieces. Photo Pieces is a fun and engaging free online game. Play it!">
            <meta property="og:title" content="Play Photo Pieces">
            <meta property="og:description" content="Play Photo Pieces. Photo Pieces is a fun and engaging free online game. Play it!">
            <meta property="og:site_name" content="Photo Pieces">
            <meta property="og:type" content="website">
            <meta property="fb:app_id" content="858847830905833" />
            <meta property="og:image" content="/assets/images/social-media.png">
            <meta property="og:url" content="https://photo-pieces.now.sh/">
            
            <meta name="twitter:title" content="Play Photo Pieces">
            <meta name="twitter:url" content="https://photo-pieces.now.sh/">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="@kuldeepkeshwar">
            <meta name="twitter:creator" content="@kuldeepkeshwar">
            <meta name="twitter:title" content="Play Photo Pieces">
            <meta name="twitter:description" content="I scored ${total} level ${levels}. Play Photo Pieces. Photo Pieces is a fun and engaging free online game. Play it!">
            <meta name="twitter:image" content="https://photo-pieces.now.sh/api/screenshot?stats=${stats}">
            <style>
                html {
                  width: 100%;
                  height: 100%;
                  background: #20273e url(https://photo-pieces.now.sh/api/screenshot?stats=e2E6MTB9) center center no-repeat;
                }
            </style>
        </head>
        <body>
        </body>
    </html>
    `;
  res.end(html);
};
