var https = require('https');

function getHTML (options, callback) {

  var host = requestOptions['host']
  var path = requestOptions['path']
  //above works fine

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data){
      console.log(callback(data))
    });
  });
}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML)

