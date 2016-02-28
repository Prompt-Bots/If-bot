
//Request helper to return the message from a request.
var requestHelper = {

  getMessage: function(body) {
    return body['message'];
  }

}

module.exports = requestHelper;