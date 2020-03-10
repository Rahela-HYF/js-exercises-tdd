var greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function() {
  // Arrange
  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  // Act
  var mentors1 = 'Irina';
  var expected1 ="Hello Irina";
  var mentors2 = 'Ashleigh'
  var expected2="Hello Ashleigh";
  var mentors3='Etza';
  var expected = "Hello Etza"
  // Assert
  var result1 = greetPeople(mentors1);
  var result2 = greetPeople(mentors2);
  var result = greetPeople(mentors3);

  expect(result1).toEqual(expected1);
  expect(result2).toEqual(expected2);
 // var expected = "Hello IrinaAshleighEtza";
  //var result = greetPeople(mentors);
  expect(result).toEqual(expected);
});
