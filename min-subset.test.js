const minSubset = require('./min-subset');

const minimalInput = ['abcdefghijklmnopqrstuvwyxz'];

test('exports a function', () => {
  expect(typeof minSubset).toEqual('function');
});

test('returns null when there is no solution', () => {
  expect(minSubset(['abc'])).toEqual(null);
});

test('returns the correct answer', () => {
  expect(minSubset(minimalInput)).toEqual(minimalInput);
});
