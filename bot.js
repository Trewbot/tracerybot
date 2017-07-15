/*
 *	tinyhatebot
 *	Written by Trewbot
 *	2017.07.15
 *
 *	Original script from https://github.com/v21/tracerybot
 */

const tracery    = require('tracery-grammar'),
      grammar    = tracery.createGrammar(require('./grammar.json'));
grammar.addModifiers(tracery.baseEngModifiers);

var tweet = grammar.flatten("#origin#");
console.log(tweet);

/*
var Twit = require('twit');


var T = new Twit(
{
    consumer_key:         process.env.TWITTER_CONSUMER_KEY
  , consumer_secret:      process.env.TWITTER_CONSUMER_SECRET
  , access_token:         process.env.TWITTER_ACCESS_TOKEN
  , access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
}
);


T.post('statuses/update', { status: tweet }, function(err, data, response) {
  //console.log(data)
})
*/
