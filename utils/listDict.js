var $ = require('jquery')

//(require("node-jsdom").jsdom().parentWindow);

var listDictionary = {

  searchforKeyword : function() {
        
  	var dict = {
  			"recipe" : ["cook", "hungry", "eat"],
  			"yelp" : ["hungry", "eat", "restaurants"],
  			"dominos" : ["pizza", "hungry", "eat"],
		};

		for (var item in dict) {
    		var array = dict[ item ];
    		for (var element in array) {
    			console.log( dict[item][element] );
    		}
		}

  //       $(this).each( dict, function( key, value ) {
  // 			//alert( key + ": " + value );
  // 			console.log( "index", key, "value", value );
  			

  // 			$(this).each( x, function( index, value ) {
  // 				//alert( index + ": " + value );
  // 				console.log( "index", index, "value", value );
			
		// 		//return dict[key][value];

		// 	});
		// });

	console.log( dict["yelp"][2] );
	//	return dict["yelp"][2];
    }

}

module.exports = listDictionary;
