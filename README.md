# slack-week-numbers
Slack bot for making sense of week numbers

## Setup
1. Host where ever, e.g. Heroku
2. Create a Slack app and point it to the host

## Usage
The slash command depends on the Slack app setup.

```
/week
==> Display current week number, e.g. 26

/week 29
==> Display info on week number 29: When it starts and when it ends

/week 29 37
==> Display info on week range 29-37: When the range starts and when it ends.
```
