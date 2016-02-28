var express = require('express');
var router = express.Router();
var requestHelper = require('../utils/requestHelper');
var parseHelper = require('../utils/parseHelper');

/* Main entry point for prompt requests */
router.post('/api/1.0', function(req, res, next) {
	
	//Get the user's message
	var message = requestHelper.getMessage(req.body);

	//For now we'll just look at the last word in the message. This should be a noun that describes what we are looking for
	var lastWord = parseHelper.getLastWordInMessage(message);

	console.log(lastWord);

  	//This is the response we'll need to send back to our user
  	var response = {
	   sendmms: true,
	   showauthurl: false,
	   authstate: null,
	   text: "Hello World! You said: " + message,
	   speech: "Hello World! You said: " + message,
	   status: "OK",
	   webhookreply: null,
	   images: [
	      {
	         imageurl: "http://api.dev.promptapp.io/images/random/helloworld.gif",
	         alttext: "Hello World!"
	      }
	   ]
	}

	//Return the json response
  	res.json(response);
});

module.exports = router;
