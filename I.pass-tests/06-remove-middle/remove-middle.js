function removeMiddle(word){
     var rword = Math.round((word.length - 1)/2);
     return  word.splice(rword, 1);
   // return word.indexOf(rword);
}
module.exports = removeMiddle;