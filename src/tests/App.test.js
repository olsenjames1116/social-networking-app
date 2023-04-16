import { screen } from '@testing-library/react';
import { toBeInTheDocument } from '@testing-library/jest-dom';
import render from './render';
import App from '../App';

describe('App Component', () => {
  it('renders app component', () => {
    render(<App />);

    const app = screen.getByTestId('app');

    expect(app).toBeInTheDocument();
  });
});
