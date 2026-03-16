import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Enhanced Form Component', () => {
  test('checks all button and input functionalities', () => {
    render(<Form />);

    const nameInput = screen.getByLabelText('Name');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const interestSelect = screen.getByLabelText('Interest');
    const termsCheckbox = screen.getByLabelText('Accept Terms');
    const submitBtn = screen.getByText('Complete Registration');
    const resetBtn = screen.getByText('Reset');

    // 1. Test filling fields
    fireEvent.change(nameInput, { target: { value: 'Alice', name: 'name' } });
    fireEvent.change(emailInput, { target: { value: 'alice@example.com', name: 'email' } });
    fireEvent.change(passwordInput, { target: { value: 'secret123', name: 'password' } });
    fireEvent.change(interestSelect, { target: { value: 'coding', name: 'interest' } });
    fireEvent.click(termsCheckbox);

    expect(nameInput.value).toBe('Alice');
    expect(emailInput.value).toBe('alice@example.com');
    expect(passwordInput.value).toBe('secret123');
    expect(interestSelect.value).toBe('coding');
    expect(termsCheckbox.checked).toBe(true);

    // 2. Test Submit Success
    fireEvent.click(submitBtn);
    expect(screen.getByRole('status')).toHaveTextContent('Form submitted successfully!');

    // 3. Test Reset Functionality
    fireEvent.click(resetBtn);
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
    expect(interestSelect.value).toBe('');
    expect(termsCheckbox.checked).toBe(false);
    expect(screen.queryByRole('status')).not.toBeInTheDocument();
  });

  test('shows specific validation for terms', () => {
    render(<Form />);
    
    // Fill all but terms
    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Bob', name: 'name' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'bob@example.com', name: 'email' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'pwd', name: 'password' } });
    fireEvent.change(screen.getByLabelText('Interest'), { target: { value: 'design', name: 'interest' } });
    
    fireEvent.click(screen.getByText('Complete Registration'));
    expect(screen.getByRole('alert')).toHaveTextContent('You must accept the terms.');
  });
});
