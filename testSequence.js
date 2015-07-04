var Twit = require('twit')

var urlExpression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;

var T = new Twit({
   consumer_key:         'IzTZJYD2anR6DCNwEAdTBBEba',
   consumer_secret:      'CpzKgQwZsNC6Rw6CmzxdfSDdJeMAB0Bx4fyzB0G9wggK5pSyYL',
   access_token:         '22908127-xJFfjfBkSR6hDCwGpfcXmouUIxJrqjLGOmOUbbasq',
   access_token_secret:  '4E8wyO55TGEVgAf7VL49mVQSUjAavDfmgKn0DUkHhBe2W'
})

/*T.get('search/tweets', { q: 'Arun Gupta', count: 2 }, function(err, data, response) {
                var twfeed="";
                for(var i = 0; i < data.statuses.length; i++) {
                    twfeed+=data.statuses[i].text;
                }
                console.log(twfeed);
            });
*/
T.get('statuses/home_timeline', {  count:5 }, function(err, data, response) {
      //console.log(data);
            var twfeed="";
                for(var i = 0; i < data.length; i++) {
                    twfeed+=data[i].user.screen_name+" says, "+data[i].text+" .  ";
                }
                twfeed=twfeed.replace(urlExpression,'web-url')
                console.log(twfeed.replace(urlExpression,'weburl'));
            
})