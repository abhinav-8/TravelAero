const fs = require('fs');
const path = require("path");
const YAML = require('yaml');

const swaggerDocument = YAML.parse(fs.readFileSync(path.resolve(__dirname,'../utils/swagger.yaml'), 'utf8'));

module.exports = swaggerDocument;
