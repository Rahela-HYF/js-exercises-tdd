var removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "Dnl"]
*/
//*****Output  of the Program****/
/*
    Expected value to equal:
      ["rn", "tz", "Dnl"]
    Received:
      ["__i_a", "___a", "_a_ie_"]
    
    Difference:
    
    - Expected
    + Received
    
      Array [
    -   "rn",
    -   "tz",
    -   "Dnl",
    +   "__i_a",
    +   "___a",
    +   "_a_ie_",
      ]*/
