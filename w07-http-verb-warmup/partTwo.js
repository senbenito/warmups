// 🐾🐾🐾 PART TWO 🐾🐾🐾

var parseRequest = function (inputString) {
  var result = {
    body:{

    },
    headers:
   { Host: '',
     'Cache-Control': '',
     'Postman-Token': '' },
  verb: '',
  path: '',
  protocol: '' };

  let splitStringSpace = inputString.split(' ', 3);
  let splitStringLine = inputString.split('\n');

//verb
  result.verb = splitStringSpace[0];

//path
  result.path = splitStringSpace[1];

//protocol
  result.protocol = splitStringSpace[2].split('\n')[0];

//body object
  for (let i=0; i<splitStringLine.length-4; i++){
    let splitStringAnd = splitStringLine[splitStringLine.length-1].split('&');
    // console.log(splitStringAnd);
    let splitStringEqual = splitStringAnd[i].split('=');
    console.log(splitStringEqual);
    result.body[splitStringEqual[0]]=splitStringEqual[1];
}

//headers object
  for (let i=1; i<splitStringLine.length-1; i++){
    let splitStringColon = splitStringLine[i].split(':');
    result.headers[splitStringColon[0]]=splitStringColon[1];
}

  return result;
}; // END FUNCTION

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
};
