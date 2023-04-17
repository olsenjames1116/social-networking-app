import { screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import render from '../render';
import LogInButton from '../../components/header/loggedOut/LogInButton';

beforeEach(() => {
  render(<LogInButton />);
});

describe('LogInButton Component', () => {
  it('renders login button when user is logged out', () => {
    const loginButton = screen.getByRole('button', { name: 'Log In' });

    expect(loginButton).toBeInTheDocument();
  });

  it.todo('hides login button when user is logged in');
});
