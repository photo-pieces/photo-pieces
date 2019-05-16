const packageJson = require("./../package.json");

module.exports = (req, res) => {
    res.end(packageJson.version);
  };
  