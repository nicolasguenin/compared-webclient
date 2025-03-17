export const prepareParams = (params: Record<string, any>) => {
  let res: Record<string, any> = {};

  for (const prop in params) {
    const value = params[prop];
    res[prop] = Array.isArray(value) ? value.join(',') : value;
  }
  return res;
};
