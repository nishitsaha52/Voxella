import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ThemeToggler from '../components/ThemeToggler';

describe('ThemeToggler', () => {
  beforeEach(() => {
    // Clear localStorage before each test to avoid conflicts
    localStorage.clear();
    document.body.classList.remove('dark-theme');
  });

  test('toggles to dark theme when clicked', () => {
    const { container } = render(<ThemeToggler />);
    
    // Simulate clicking the button to switch to dark mode
    const toggleButton = container.querySelector('.theme-toggle-button');
    fireEvent.click(toggleButton);
    
    // Check if the dark theme class was added to the body
    expect(document.body.classList.contains('dark-theme')).toBe(true);
    
    // Check if localStorage was updated
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  test('toggles to light theme when clicked again', () => {
    const { container } = render(<ThemeToggler />);
    
    // Simulate clicking the button to switch to dark mode
    const toggleButton = container.querySelector('.theme-toggle-button');
    fireEvent.click(toggleButton);
    
    // Simulate clicking the button again to switch back to light mode
    fireEvent.click(toggleButton);
    
    // Check if the dark theme class was removed from the body
    expect(document.body.classList.contains('dark-theme')).toBe(false);
    
    // Check if localStorage was updated
    expect(localStorage.getItem('theme')).toBe('light');
  });

  test('respects saved theme preference from localStorage', () => {
    // Simulate saving a dark theme preference in localStorage
    localStorage.setItem('theme', 'dark');
    
    // Render the component
    render(<ThemeToggler />);
    
    // Check if the dark theme class was added to the body based on localStorage
    expect(document.body.classList.contains('dark-theme')).toBe(true);
  });
});
