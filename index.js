'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

const server = app.listen(app.get('port'), () => {
  console.log(
    'Express server listening on port %d in %s mode',
    app.get('port'),
    app.settings.env
  );
});

app.get('/', (req, res) => {
  res.send('you have no power here');
});
