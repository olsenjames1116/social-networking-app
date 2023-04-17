import { screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import render from '../render';
import Account from '../../components/header/Account';

describe('Account Component', () => {
  it('renders account component', () => {
    render(<Account />);

    const account = screen.getByTestId('account');

    expect(account).toBeInTheDocument();
  });
});
