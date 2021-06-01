import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Signin } from './index';
import { ReduxProvider } from 'test-utils/Provider';
import { store } from 'state';
import { ComponentType } from 'react';

test('Button is enabled when inputs fields are valid', () => {
  const mockProps = { setFormDisplay: () => {} };
  const wrapper = ({
    children,
  }: {
    children: ComponentType<{}> | undefined;
  }) => <ReduxProvider reduxStore={store}>{children}</ReduxProvider>;

  //@ts-ignore
  render(<Signin {...mockProps} />, { wrapper });

  const button = screen.getByRole('button');
  expect(button).toBeDisabled();

  const emailInput = screen.getByTestId('email-input');
  const passwordInput = screen.getByTestId('password-input');

  userEvent.type(emailInput, 'test@test.com');
  userEvent.type(passwordInput, 'password');

  expect(button).toBeEnabled();
});
