const { parse } = require("url");
const atob = require("atob");
module.exports = function(req, res) {
  const {
    query: { stats }
  } = parse(req.url, true);
  const { levels = 0, total = 0 } = atob(stats);

  const html = `
    <html>
        <head>
        <title>stackstickers</title>
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:site" content="@kuldeepkeshwar">
            <meta name="twitter:creator" content="@kuldeepkeshwar">
            <meta name="twitter:title" content="Play Photo Pieces">
            <meta name="twitter:description" content="played Photo Pieces scored ${total} level ${levels}">
            <meta name="twitter:image" content="https://photo-pieces.now.sh/api/screenshot?stats=${stats}">
            <style>
                body {
                    background: url(https://photo-pieces.now.sh/api/screenshot?stats=${stats});
                    background-repeat: no-repeat;
                }
            </style>
        </head>
        <body>
        </body>
    </html>
    `;
  res.end(html);
};
