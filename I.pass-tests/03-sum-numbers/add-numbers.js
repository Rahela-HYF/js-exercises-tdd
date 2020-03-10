function addNumbers(numbers , number) {
   //var add = parseInt(numbers + numbers);
    return numbers.reduce((a,b) => a + b);
}
module.exports = addNumbers;
