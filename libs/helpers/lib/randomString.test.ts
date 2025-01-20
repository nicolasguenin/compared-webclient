import { describe } from 'vitest';
import { randomString } from './randomString';

describe('randomString', () => {
  it('should throw an error due to the negative length', () => {
    expect(() => randomString(-1)).toThrow();
  });
  it('returns an empty string when length is 0', () => {
    const result = randomString(0);
    expect(result).toBe('');
  });
  it('returns a string of required length', () => {
    const lengths = [1, 2, 3, 5, 8, 13];
    const results = lengths.map((length) => randomString(length));
    expect(results.map((result) => result.length)).toStrictEqual(lengths);
  });
});
