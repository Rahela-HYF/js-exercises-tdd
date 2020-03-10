// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
var getEven = require("./get-even-numbers");

test("Even number",function () {
    var input = [22, 13, 73, 82, 4];
    var expected = [22, 82, 4];

    var result = getEven(input);

    expect(result).toEqual(expected);
    
})
/* PASS  II.write-tests/07-get-even-numbers/get-even-numbers.test.js
  ✓ Even number (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total */