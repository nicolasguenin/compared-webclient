export type IErrorViolations = {
  error: {
    violations: Record<string, string>;
    message: string;
  };
  payload?: Record<string, string | number>;
};

/**
 * Build violations error object
 */
export const buildViolations = (
  violations: IErrorViolations['error']['violations'],
  errorMsg: string,
  payload: IErrorViolations['payload'] = {}
): IErrorViolations => {
  return {
    error: {
      violations,
      message: errorMsg,
    },
    payload,
  };
};

/**
 * Find violation inside useActionState data
 */
export const getViolationMsg = (
  data: undefined | IErrorViolations | unknown,
  violation: string
) => {
  return (data as IErrorViolations)?.error?.violations[violation] || '';
};
