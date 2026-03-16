import { render, screen } from '@testing-library/react';
import App from './App';

test('renders premium header title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Front-end Excellence/i);
  expect(headerElement).toBeInTheDocument();
});
