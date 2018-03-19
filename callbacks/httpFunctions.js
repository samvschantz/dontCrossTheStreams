var https = require('https');

module.exports = function getHTML (options, callback) {

  var host = options['host']
  var path = options['path']

  https.get(options, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      callback(data)
    });
  });
}



