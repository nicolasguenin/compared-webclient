import { http, HttpResponse } from 'msw';

export const signInHandlers = [
  http.post('/api/signin', () => {
    return HttpResponse.json({ succeeded: true }, { status: 200 });
  }),
];
