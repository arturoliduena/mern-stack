import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../components/Input';

describe('test components', () => {
  it('renders Input', async () => {
    await render(<Input label='text test' value='' onChange={() => {}} checkFields/>);
    expect(screen.getByText('text test')).toBeInTheDocument();
  });
})