// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
function average(input){

   /* if(isNaN(input)){
        return  input.replace(" ");
    }else{
        return input.reduce((a,b) => a + b, 0)/input.length;
       
    }*/
    const result = input.filter(num => typeof num == 'number');
    return result.reduce((a,b) => a + b)/result.length;

}
module.exports = average;