export interface SignInPayload {
  email: FormDataEntryValue | string;
  password: FormDataEntryValue | string;
}

export type SignInResponse = {
  succeeded: boolean;
};

export type SignInError = {
  email?: string;
  password?: string;
};

export type SignInErrorResponse = {
  error: {
    violations: SignInError;
    message: string;
  };
  payload?: SignInPayload;
};
