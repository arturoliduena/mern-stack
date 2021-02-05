import React from 'react';
import App from '../App';

import { render, fireEvent, screen } from '../test-utils'

it('Renders sorting buttons', () => {
  render(<App />, { initialState: { } })
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
