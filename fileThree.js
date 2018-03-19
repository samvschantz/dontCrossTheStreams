var https = require('https');

function getAndPrintHTML (options) {

  var host = requestOptions['host']
  var path = requestOptions['path']

  var bufferVar = ''

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data) {

      bufferVar += data
      console.log(bufferVar)

    });
  });

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)