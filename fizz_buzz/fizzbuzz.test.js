const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('replaces 3 with Fizz', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('replaces 5 with Buzz', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
  });

  it('returns 8', () => {
    expect(fizzbuzz(8)).toBe(8);
  });

  it('replaces 15 with FizzBuzz', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });
})