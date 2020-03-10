var largerThanTen = require("./numbersGreaterThan10");

test("Get numbers greater than 10", function() {

    var input = [4, 10, 32, 9, 21];
    var expected = [32, 21];

    var result = largerThanTen(input);

    expect(result).toEqual(expected);
});

// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
/** Output of the program */
/*est Suites: 1 passed, 1 total
Tests:       1 passed, 1 total */