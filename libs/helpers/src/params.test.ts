import { prepareParams } from './params';

test('prepareParams', () => {
  const mock = {
    embed: ['lorem', 'ipsum'],
    nb: 1,
    bool: true,
    str: 'string',
  };

  expect(prepareParams(mock)).toEqual({
    embed: 'lorem,ipsum',
    nb: 1,
    bool: true,
    str: 'string',
  });
});
