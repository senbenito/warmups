// 🐾🐾🐾 PART ONE 🐾🐾🐾

var parseRequest = function (inputString) {
  var result = { headers:
   { Host: '',
     'Cache-Control': '',
     'Postman-Token': '' },
  verb: '',
  path: '',
  protocol: '' };

  let splitStringSpace = inputString.split(' ', 3);
  let splitStringLine = inputString.split('\n');

  result.verb = splitStringSpace[0];
  result.path = splitStringSpace[1];
  result.protocol = splitStringSpace[2].split('\n')[0];

  for (let i=1; i<splitStringLine.length; i++){
    let splitStringColon = splitStringLine[i].split(':');
    result.headers[splitStringColon[0]]=splitStringColon[1];
}

  return result;
}; // END FUNCTION

module.exports = {
  parseRequest: parseRequest,
  attendance: "wordy wordy"
};
