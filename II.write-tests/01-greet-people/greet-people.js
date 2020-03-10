function greetPeople(people) {
  var greeting = "Hello ";

  people.forEach(function(person) {
    greeting = greeting + person;
  });

  return greeting;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
//This is the out put of the program the program doesnt work unless
/* var expected = "Hello IrinaAshleighEtza";
  //var result = greetPeople(mentors);*/ //set in the test case which is incorrect
/*TypeError: people.forEach is not a function

      2 |   var greeting = "Hello ";
      3 | 
    > 4 |   people.forEach(function(person) {
      5 |     greeting = greeting + person;
      6 |   });
      7 | 
      
      at forEach (II.write-tests/01-greet-people/greet-people.js:4:10)
      at Object.greetPeople (II.write-tests/01-greet-people/greet-people.test.js:13:17)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.908s, estimated 1s
Ran all test suites matching /greet-people.test.js/i.
npm ERR! Test failed.  See above for more details. */