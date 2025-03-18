// __tests__/set1.ts

import { kasPositiivne } from "../f1";

// Basic test to verify the setup
test('test1', () => {  // Declares a test case named "test1"
  expect(3 + 2).toBe(5); // Asserts that the sum of 3 and 2 equals 5. If true, the test passes.
}); // Ends the test case block

// Test for kasPositiivne function
test("positiivsus", () => {
  // Test positive number
  expect(kasPositiivne(3)).toBe(true);
  
  // Test zero
  expect(kasPositiivne(0)).toBe(false);
  
  // Test negative number
  expect(kasPositiivne(-5)).toBe(false);
});
