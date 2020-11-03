const sum = require("./sum");

test('add 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3);
});

// demo of BDD-style in a unit test
test('stub of a test with a given-when-then format', () => {
   // Given -- do setup here (or in a beforeEach() method)

   // When -- Get response from your system under test

   // Then -- Validate that results are as expected
});
