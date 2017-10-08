const request = require('request-promise-native');
const cheerio = require('cheerio');
const fs      = require('fs');

request("http://steamcommunity.com/groups/inventoryservice")
  .then(cheerio.load)
  .then($ => $(".group_associated_game"))
  .then(gameNodes => Array.prototype.map.call(gameNodes, node => node.children[3]))
  .then(links => links.map(link => ({
    appId: link.attribs.href.split('/').pop(),
    name: link.firstChild.data.trim()
  })))
  .then(games => games.reduce((accumulator, currentGame) => {
    accumulator[currentGame.appId] = currentGame.name;
    return accumulator;
  }, {}))
  .then(dict => fs.writeFileSync('games.json', JSON.stringify(dict, null, 2)))
  .then(() => console.log('done'));
