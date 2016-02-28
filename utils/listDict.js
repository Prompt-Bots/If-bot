var listDictionary = {

  searchforKeyword : function(lastWord) {

    lastWord = lastWord.toLowerCase();
        
  	var dict = {
  			"@recipe" : ["cook", "hungry", "eat", "food"],
  			"@yelp" : ["hungry", "eat", "restaurants", "food"],
  			"@dominos" : ["pizza", "hungry", "eat", "food"],
        "@uber" : ["ride", "lift", "taxi"],
        "@twitter" : ["laugh", "relax", "tweet"],
        "@espn" : ["scores", "game", "sport"],
        "@511" : ["metro", "ride", "bart"],
        "@track" : ["package", "mail", "USPS"],
        "@calc" : ["math", "calculator"],
        "@hn" : ["hacker", "news", "computer"],
        "@translate" : ["translate", "language", "translator"],
        "@dictionary" : ["word", "dictionary", "help"],
        "@nest" : ["heat", "thermostat"],
        "@weather" : ["forecast", "umbrella", "weather"],
        "@time" : ["date", "week", "reminder", "time"],
        "@gmail" : ["email", "update"],
        "@nyt" : ["news", "paper", "update"],
        "@angellist" : ["vc", "startups", "jobs"],
        "@marcobot" : ["marco", "rubio", "president", "elections"],
        "@stock" : ["money", "stock", "market", "invest"],
        "@rottentomatoes" : ["movies", "reviews", "theatre", "rating"],
        "@producthunt" : ["startups", "product", "website", "discover"],
        "@wolfram" : ["math", "calculate", "tool"],
        "@directions" : ["directions", "map", "location"],
        "@sms" : ["message", "sms", "text"],
        "@remind" : ["reminder", "set", "tasks"],
        "@paypal" : ["money", "send", "online", "transaction"]
		};

    var returnList = [];

		for (var item in dict) {
    		var array = dict[item];
    		for (var element in array) {            
            if (array[element].localeCompare(lastWord) == 0) {
                returnList.push(item);
            }
    		}
		}

      return returnList;
    }

}

module.exports = listDictionary;
