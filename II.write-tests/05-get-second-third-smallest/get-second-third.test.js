// example
// input =[90, 5, 11, 8, 6]; 
// expected output = [6, 8];

// also test that the original array has not changed
var getSecondThird = require("./get-second-third");
test("get the second and third item in myArray", function() {
    var input =  [90, 5, 11, 8, 6];
    var expected = [6, 8];
    var original = [90, 5, 11, 8, 6];

    var result = getSecondThird(input);

    expect(result).toEqual(expected);
    expect(input).toEqual(original);

});
/*** Output of the program***/
/* Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total */
