const DEFAULT_CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export const randomString = (length: number, charset = DEFAULT_CHARSET) => {
  const values = crypto.getRandomValues(new Uint32Array(length));

  let res = '';
  for (let i = 0; i < length; i++) {
    res += charset[values[i] % charset.length];
  }
  return res;
};
