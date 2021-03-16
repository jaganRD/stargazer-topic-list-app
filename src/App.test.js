import { render, screen } from '@testing-library/react';
import App from './App';


test('renders home page as home route', () => {
  render(<App />);
  const graphLogo = screen.getByTestId('graph-logo')
  const mainSection = screen.getByTestId('main-page-section')
  const headerElement = screen.getByText(/GraphQL Star Gazers Topics APP/i)

  expect(graphLogo).toBeInTheDocument();
  expect(mainSection).toBeInTheDocument();
  expect(headerElement).toBeInTheDocument();
});
