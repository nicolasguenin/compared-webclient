import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { http, HttpResponse } from 'msw';
import { beforeEach, vi } from 'vitest';
import useAuth from '../../../../shared/src/auth/hooks/useAuth';
import { server } from '../../../mocks/server';
import SignInForm from './SignInForm';

vi.mock('../../../../shared/src/auth/hooks/useAuth');

describe('SignInForm', () => {
  let user: UserEvent;
  let button: HTMLElement;
  let emailInput: HTMLInputElement;
  let passwordInput: HTMLInputElement;
  let container: HTMLElement;

  beforeEach(() => {
    vi.mocked(useAuth).mockImplementation(() => ({
      isLoggedIn: false,
      setIsLoggedIn: () => {},
    }));

    user = userEvent.setup();

    container = render(<SignInForm />).container;
    emailInput = screen.getByRole('textbox', {
      name: /email/i,
    }) as HTMLInputElement;
    passwordInput = container.querySelector(
      'input[type="password"]'
    ) as HTMLInputElement;
    button = screen.getByRole('button', { name: /sign in/i });
  });

  test('empty values', async () => {
    const noonErrors = container.querySelectorAll('.text-danger');
    expect(noonErrors.length).toEqual(0);

    await user.click(button);

    const errors = container.querySelectorAll('.text-danger');
    expect(errors.length).toEqual(2);
  });

  test('Submit with true information', async () => {
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    await user.type(emailInput, 'john@doe.com');
    await user.type(passwordInput, '123456');
    await user.click(button);

    const paragraph = await screen.findByText(/successful login/i);
    expect(paragraph).toBeInTheDocument();
  });

  test('Submit with wrong information', async () => {
    server.resetHandlers(
      http.post('/api/signin', () => {
        return HttpResponse.json(
          {
            error: {
              violations: {
                email: 'Invalid email format',
                password: 'Invalid password format',
              },
              message: 'The format of some data is not valid',
            },
          },
          { status: 400 }
        );
      })
    );

    await user.type(emailInput, 'john@doe.com');
    await user.type(passwordInput, '123456');
    await user.click(button);

    const emailAlert = await screen.findByText(/invalid email format/i);
    const passwordAlert = await screen.findByText(/invalid password format/i);

    expect(emailAlert).toBeInTheDocument();
    expect(emailAlert.className).contain('text-danger');
    expect(passwordAlert).toBeInTheDocument();
    expect(passwordAlert.className).contain('text-danger');

    expect(emailInput.value).toEqual('john@doe.com');
    expect(passwordInput.value).toEqual('123456');
  });
});

describe('Alreay logged in', () => {
  beforeEach(() => {
    vi.mocked(useAuth).mockImplementation(() => ({
      isLoggedIn: true,
      setIsLoggedIn: () => {},
    }));
  });

  it('should display logged in message', () => {
    render(<SignInForm />);

    const paragraph = screen.getByText(/you are already logged in/i);
    expect(paragraph).toBeInTheDocument();
  });
});
