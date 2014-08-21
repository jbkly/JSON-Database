var express = require('express'),
    fs = require('fs');

var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8000;

var router = express.Router();

// default route: local time
router.get('/', function(req, res) {
  var now = new Date();
  res.json({'Local Time': now});
});

// // second route: greeting for name passed as param in URL
// router.get('/:name', function(req, res) {
//   res.json({'Message': 'Why hello ' + req.params.name + '!'});
// });

router.route('/:some_name')

  .post(function(req, res) {
    var fileName = './json/' + req.params.some_name + '.json';
    fs.writeFileSync(fileName, JSON.stringify(req.body));
    res.json(req.body);
  })

  .get(function(req, res) {
    var fileName = './json/' + req.params.some_name + '.json';
    var fileContent = fs.readFileSync(fileName, 'utf8');
    res.json(JSON.parse(fileContent));
  });

// register routes
app.use('/', router);

// start the server
app.listen(port);
console.log('Server running on port ' + port);
