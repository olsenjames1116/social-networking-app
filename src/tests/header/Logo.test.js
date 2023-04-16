import { screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import render from '../render';
import Logo from '../../components/header/Logo';

describe('Logo Component', () => {
  it('renders logo component', () => {
    render(<Logo />);

    const logo = screen.getByText('CineFile');

    expect(logo).toBeInTheDocument();
  });
});
