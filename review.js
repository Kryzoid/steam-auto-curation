const request  = require('request-promise-native');
const bluebird = require('bluebird');
const games    = require('./games.json');
const endpoint = require('./review.json');

let delay = threeSeconds = 3000;

Object.keys(games)
  .map(appId =>  ({appId: appId, name: games[appId]}))
  .map(game => {
    delay += threeSeconds;

    return bluebird.delay(delay)
      .then(() => {
        const options = Object.assign({}, endpoint);
        options.formData.appid = game.appId;
        options.formData.appname = game.name;
        return request(options);
      })
      .then(console.log)
  });
