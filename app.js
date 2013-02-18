var path = require('path'),
  express = require('express'),
  app = express();

var PEOPLE_MAP_DIST_DIR = path.join(__dirname, '../', 'People-Map', 'dist'); 

app.use(express.static(PEOPLE_MAP_DIST_DIR));

app.listen(3000);
console.log('Listening on port 3000');