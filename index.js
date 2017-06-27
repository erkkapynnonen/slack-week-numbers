'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const moment = require('moment');
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
  return;
});

app.post('/', (req, res) => {
  let input = req.body.text;
  let output = {
    response_type: "ephemeral",
    title: false,
    attachments: []
  };

  let defaultLocale = 'fi';
  let locale = defaultLocale;
  let dateFormat = 'l';
  let rg = {
    isWeekNumber: new RegExp(/^\d{1,2}(\s\d{1,2})?$/)
  };

  moment().locale(locale);

  // return current week
  if (!input) {
    output.title = "This is week number " + moment().week();
  }
  else if (rg.isWeekNumber.test(input)) {
    let parts = input.split(" ");
    let date = moment();
    date.locale(locale);

    date.week(parts[0]);
    output.title = "Week: " + parts[0];
    date.startOf("week");
    output.attachments.push({
      title: "Starts on",
      text: date.format(dateFormat),
      short: true
    });

    date.week(parts[parts.length-1]);
    date.endOf("week");
    output.attachments.push({
      title: "Ends on",
      text: date.format(dateFormat),
      short: true
    });
  }
  else {
    output.title = "You are not making sense, Betsy";
  }

  res.json(output);
  return;
});
