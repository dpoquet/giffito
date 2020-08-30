import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Home without crashing', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Last search/i);
  expect(linkElement).toBeInTheDocument();
});
