function secondLargest(numbers){
   // numbers.sort();
    var numbers= numbers.sort(((a,b) => b-a));
    return numbers[1];

}
module.exports = secondLargest;