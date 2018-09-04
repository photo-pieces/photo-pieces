var express = require("express");
var fs = require("fs");
var https = require("https");
var app = express();

app.use(express.static("build"));

https
  .createServer(
    {
      key: fs.readFileSync("server.key"),
      cert: fs.readFileSync("server.cert")
    },
    app
  )
  .listen(3000, function() {
    console.log(
      "Example app listening on port 3000! Go to https://localhost:3000/"
    );
  });
