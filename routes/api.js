var express = require('express');
var router = express.Router();
var requestHelper = require('../utils/requestHelper');
var parseHelper = require('../utils/parseHelper');
var listDict = require('../utils/listDict');


/* Main entry point for prompt requests */
router.post('/api/1.0', function(req, res, next) {
	
	//Get the user's message
	var message = requestHelper.getMessage(req.body);

	//For now we'll just look at the last word in the message. This should be a noun that describes what we are looking for
	var lastWord = parseHelper.getLastWordInMessage(message);

	//Access the dict for services and matching sentiments 
	var listArray = listDict.searchforKeyword(lastWord);

  	//This is the response we'll need to send back to our user
  	if(listArray.length == 0){
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
  			   text: "You said " + lastWord + " : so try these bots -- " + listArray,
  			   speech: "You said " + lastWord + " : so try these bots -- " + listArray,
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

module.exports = router;
