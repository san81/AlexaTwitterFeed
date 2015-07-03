var Twit = require('twit')
var Futures = require('futures')

var T = new Twit({
   consumer_key:         'IzTZJYD2anR6DCNwEAdTBBEba',
   consumer_secret:      'CpzKgQwZsNC6Rw6CmzxdfSDdJeMAB0Bx4fyzB0G9wggK5pSyYL',
   access_token:         '22908127-xJFfjfBkSR6hDCwGpfcXmouUIxJrqjLGOmOUbbasq',
   access_token_secret:  '4E8wyO55TGEVgAf7VL49mVQSUjAavDfmgKn0DUkHhBe2W'
})

T.get('search/tweets', { q: 'Arun Gupta', count: 2 }, function(err, data, response) {
                var twfeed="";
                for(var i = 0; i < data.statuses.length; i++) {
                    twfeed+=data.statuses[i].text;
                }
                console.log(twfeed);
            });