You are given an array with integers between 1 and 100,000, but one integer is missing. Write a function that determines the missing value.

Here is a helper function, written in javascript, to generate an array with one integer removed from it:

```
function arrayBuilder(length) {
  length = length || 100000;
  var removedNumber = Math.floor(Math.random() * length);
  var array = Array.apply(null, Array(length)).map(function (_, i) {return i + 1;});
  array.splice(removedNumber, 1);
  return array;
}
```

function findMissing(array){
  for (let i=0; i<array.length; i++){
    if (array[i]+1 !== array[i+1]){
      return array[i]+1;
    }
  }
}

function findMissing(array){
   var results = array.filter(function(element, index){
      // console.log(element);
    if(element-1 !== index){
      return element;
    }
  });
  return (results.reduce(function(a,v){
    return a;
  }))-1;
}

var testArray = arrayBuilder();
console.log(testArray);
findMissing(testArray);
