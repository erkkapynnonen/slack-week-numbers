# slack-week-numbers
Slack bot for making sense of week numbers

## Setup
1. Host where ever, e.g. Heroku
2. Create a Slack app and point it to the host

## Usage
The slash command depends on the Slack app setup.

*Display current week number*
```
/week
==> 26
```

*Display info on week number 29*
```
/week 29
==> Week: 29
    Starts on: 31.7.2017
    Ends on: 7.8.2017
```

*Display info on week range 29-31*
```
/week 29 31
==> Week: 29 ... 31
    Starts on: 31.7.2017
    Ends on: 21.8.2017
```

Stuff's localized for Finland, will add a locale switch later.

## Main 3rd party stuff
* [ExpressJS](https://expressjs.com/)
* [MomentJS](https://momentjs.com/)
