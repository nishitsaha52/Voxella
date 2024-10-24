import React from 'react';
import { render, screen } from '@testing-library/react';
import Preloader from '../components/PreLoader'; // Adjust the import path based on your project structure

describe('Preloader Component', () => {
  test('renders loading logo and loading text', () => {
    render(<Preloader />);
    
    // Check if the loading logo is in the document
    const logo = screen.getByAltText(/loading logo/i);
    expect(logo).toBeInTheDocument();
    
    // Check if the loading text is in the document
    const loadingText = screen.getByText(/loading/i);
    expect(loadingText).toBeInTheDocument();
  });

  test('renders with correct class name', () => {
    const { container } = render(<Preloader />);
    expect(container.firstChild).toHaveClass('preloader');
  });
});
