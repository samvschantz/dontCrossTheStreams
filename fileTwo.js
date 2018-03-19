var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  var bufferVar = ''

  https.get(requestOptions, function(response){

    response.setEncoding('utf8');

    response.on('data', function (data) {

      bufferVar += data
      console.log(bufferVar)

    });
  });
}



getAndPrintHTML()