var express = require('express');
var router = express.Router();
var requestHelper = require('../utils/requestHelper');
var parseHelper = require('../utils/parseHelper');
var listDict = require('../utils/listDict');
var WordPOS = require('wordpos');
var wordpos = new WordPOS();


/* Main entry point for prompt requests */
router.post('/api/1.0', function(req, res, next) {
	
	//Get the user's message
	var message = requestHelper.getMessage(req.body);

	//For now we'll just look at the last word in the message. This should be a noun that describes what we are looking for
	var lastWord = parseHelper.getLastWordInMessage(message);

	//Get all the nouns in our message
	var wordList = [lastWord];
	
	//Get all the nouns from the message
	wordpos.getNouns(message).then(function(result){

		var resultArray = Array(); 

		//Add the results to our wordList
		wordList = wordList.concat(result);

		//Now search by keyword for all our parsed words
		for(var i = 0; i < wordList.length; i++){
			resultArray = resultArray.concat(listDict.searchforKeyword(wordList[i]));
		}

		//Remove duplicates
		resultArray = Array.from(new Set(resultArray));

	  	//This is the response we'll need to send back to our user
	  	if(resultArray.length == 0){
	  		  	var response = {
	  			   sendmms: true,
	  			   showauthurl: false,
	  			   authstate: null,
	  			   text: "No suggestions",
	  			   speech: "No suggestions",
	  			   status: "OK",
	  			   webhookreply: null,
	  			   images: [
	  			      {
	  			         imageurl: "",
	  			         alttext: ""
	  			      }
	  			   ]
	  			}
	  	} else{
	  		  	var response = {
	  			   sendmms: true,
	  			   showauthurl: false,
	  			   authstate: null,
	  			   text: "You said " + lastWord + " : so try these bots -- " + resultArray,
	  			   speech: "You said " + lastWord + " : so try these bots -- " + resultArray,
	  			   status: "OK",
	  			   webhookreply: null,
	  			   images: [
	  			      {
	  			         imageurl: "",
	  			         alttext: ""
	  			      }
	  			   ]
	  			}
	  	}
	  	

		//Return the json response
	  	res.json(response);




	});

});

module.exports = router;
