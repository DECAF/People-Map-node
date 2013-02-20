var path = require('path'),
  express = require('express'),
  app = express(),
  API = require('./API'),
  defaultEntry = require('./editor-defaults.json');

var PEOPLE_MAP_DIST_DIR = path.join(__dirname, '../', 'People-Map', 'dist');

app.use(express.static(PEOPLE_MAP_DIST_DIR));
app.use(express.bodyParser());

app.get(API.MAP_ENTRIES, function (req, res) {
  res.json(defaultEntry);
});

app.get(API.API_SAVE_JSON + '/:data', function (req, res) {
  try {
    var data = decodeURIComponent(req.params.data);
    if (data) {
      res.setHeader('Content-Type', 'application/json;');
      res.setHeader('Content-disposition', 'attachment; filename=map-entry.json');
      res.json(JSON.parse(data));
    }
  } catch (e) {
    res.send(500, {
      error : "Oops, Saving your json failed. \n #{e}"
    })
  }
});

app.listen(3000);
console.log('Listening on port 3000');