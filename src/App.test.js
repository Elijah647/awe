import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

test('renders Booking page', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Navigate to the Booking page
  window.history.pushState({}, 'Booking Page', '/Booking');

  // Check for static text in Booking component
  const bookingHeader = screen.getByText(/booking/i); // Adjust based on your content
  expect(bookingHeader).toBeInTheDocument();
});