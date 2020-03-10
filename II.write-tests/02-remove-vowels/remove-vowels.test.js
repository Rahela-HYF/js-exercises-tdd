var removeVowels = require("./remove-vowels");
test("remove vowels from word", function() {
  // Arrange
  var expected = 'sml'
  // Act
  // Assert
  var result = removeVowels('samuel');
  expect(result).toEqual(expected);
});
