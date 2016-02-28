var WordPOS = require('wordpos');
var wordpos = new WordPOS();
//Function to split a string 
var parseHelper  = {

	//Function splits a message by whitespace and returns the array
	parseMessageWithDelimiter: function(message, delim){
		return message.split(delim);
	}, 

	//Function to return the last word in a message. 
	getLastWordInMessage: function(message){
		var array = this.parseMessageWithDelimiter(message, ' ');
		var retString = array[array.length - 1];
		return retString.replace(/[^a-zA-Z]/g, "");
	}
	
}

module.exports = parseHelper;