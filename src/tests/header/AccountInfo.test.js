import render from '../render';
import AccountInfo from '../../components/header/loggedIn/AccountInfo';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import { getByTestId, queryByTestId, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

beforeEach(() => {
  render(<AccountInfo />);
});

describe('AccountInfo Component', () => {
  it('displays account info to DOM', () => {
    const accountInfo = screen.getByTestId('accountInfo');

    expect(accountInfo).toBeInTheDocument();
  });

  it.todo("displays  the user's image to the DOM");

  it.todo("displays the user's name when logged in");

  it.todo('displays the account menu icon when logged in');

  it('displays the account menu when the icon is clicked', async () => {
    const accountMenuIcon = screen.getByTestId('accountMenuIcon');

    userEvent.click(accountMenuIcon);

    screen.debug();

    await waitFor(() => {
      const accountMenu = screen.queryByTestId('accountMenu');
      expect(accountMenu).toBeInTheDocument();
    });
  });
});
