var words = ["ground", "control", "to", "major", "tom"];

// map(words, function(word) {
//   return word.length;
// });

function map (words, cb){
  var newArray = [];
  for (var i = 0; i < words.length; i++){
    var tempresult = cb (words[i]);
    newArray.push(tempresult);
  }
  return newArray;
}

function wordLength (word) {
  return word.length;
}

console.log(map(words, wordLength));
