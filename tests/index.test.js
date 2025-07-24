// tests/index.test.js
const { add } = require('../src/index');

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3); // ✅ This will pass
});

// test('this test will fail', () => {
//   expect(add(1, 1)).toBe(3); // ❌ This will fail
// });
