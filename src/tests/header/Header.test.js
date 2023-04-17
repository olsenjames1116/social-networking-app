import { screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import render from '../render';
import Header from '../../components/header/Header';

describe('Header Component', () => {
  it('renders header component', () => {
    render(<Header />);

    const header = screen.getByTestId('header');

    expect(header).toBeInTheDocument();
  });
});
