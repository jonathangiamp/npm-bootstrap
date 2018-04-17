const add = require('../lib');

describe('The parameters are added', () => {
  const [a, b] = [4, 8];
  const result = add(a, b);

  test('check if is the correct result', () => {
    expect(result).toBe(a + b);
  });
});
