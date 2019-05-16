
const { parse } = require("url");
const packageJson = require("./../package.json");

module.exports = (req, res) => {
    const {
        query: { version }
      } = parse(req.url, true);
     if(version===packageJson){
        res.writeHead(200);     
     }else{
        res.writeHead(400);
     }
  };
  