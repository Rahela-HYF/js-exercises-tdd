// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed

var getLargestNumber = require("./largest-number");

test("largest Number",function () {
  // arrange
    var input = [3, 21, 88, 4, 36];
    var expected = 88;

    var original = [3, 21, 88, 4, 36];
  // act
    var output = getLargestNumber(input);
// assert
    expect(output).toEqual(expected);
    expect(input).toEqual(original);
    
})
/**Output of the Program */
/*Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total */
