var listDictionary = {

  searchforKeyword : function(lastWord) {
        
  	var dict = {
  			"recipe" : ["cook", "hungry", "eat"],
  			"yelp" : ["hungry", "eat", "restaurants"],
  			"dominos" : ["pizza", "hungry", "eat"],
		};

    var returnList = [];

		for (var item in dict) {
    		var array = dict[item];
    		for (var element in array) {            
            if (array[element].localeCompare(lastWord) == 0) {
                console.log(item);
                returnList.push(item);
            }
    		}
		}

      return returnList;
    }

}

module.exports = listDictionary;
