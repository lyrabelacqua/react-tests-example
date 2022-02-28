import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  const linkElement = screen.getByRole('link', { text: /learn react/})
  console.log('i will fix this later');
  expect(linkElement).toBeInTheDocument();
});