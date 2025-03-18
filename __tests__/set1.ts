// __tests__/set1.ts

import { kasPositiivne } from "../f1";

// Basic test to verify the setup
test('test1', () => {
  expect(3 + 2).toBe(5);
});

// Test for kasPositiivne function
test("positiivsus", () => {
  // Test positive number
  expect(kasPositiivne(3)).toBe(true);
  
  // Test zero
  expect(kasPositiivne(0)).toBe(false);
  
  // Test negative number
  expect(kasPositiivne(-5)).toBe(false);
});
