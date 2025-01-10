import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react'; // Import waitFor
import { MemoryRouter } from 'react-router-dom';
import Booking from './Booking';
import BookingForm from './BookingForm';
import { fetchAPI } from './localStorageAPI';

jest.mock('./localStorageAPI', () => ({
  fetchAPI: jest.fn().mockResolvedValue(["17:00", "18:00"]),
  store: jest.fn(),
  submitApi: jest.fn().mockResolvedValue(true),
}));


describe('Booking Component', () => {
  test('renders Booking page', () => {
    render(
      <MemoryRouter>
        <Booking />
      </MemoryRouter>
    );
    const bookingHeader = screen.getByText(/booking/i);
    expect(bookingHeader).toBeInTheDocument();
  });

  test('renders static text for date label', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={[]} updateAvailableTimes={() => {}} submitForm={() => {}} />
      </MemoryRouter>
    );
    
    const dateLabel = screen.getByLabelText(/select date/i);
    expect(dateLabel).toBeInTheDocument();
  });

  test('dispatches updateAvailableTimes action on date change', () => {
    const mockUpdateAvailableTimes = jest.fn();
    render(
      <MemoryRouter>
        <BookingForm availableTimes={["17:00", "18:00"]} updateAvailableTimes={mockUpdateAvailableTimes} submitForm={() => {}} />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/select date/i);
    fireEvent.change(dateInput, { target: { value: '2024-09-18' } });
    expect(mockUpdateAvailableTimes).toHaveBeenCalledWith('2024-09-18');
  });

  test('can submit the form', async () => {
    const mockSubmit = jest.fn();
    
    render(
      <MemoryRouter>
        <BookingForm 
          availableTimes={["17:00", "18:00"]} 
          updateAvailableTimes={() => {}} 
          submitForm={mockSubmit} 
        />
      </MemoryRouter>
    );
  
    // Fill in the form fields
    fireEvent.change(screen.getByLabelText(/select date/i), { target: { value: '2024-09-18' } });
    fireEvent.change(screen.getByLabelText(/select time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 2 } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
  
    // Simulate form submission
    fireEvent.submit(screen.getByRole('button', { name: /submit/i }).closest('form')); 
  
    // Wait for the submit function to be called
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalledWith({
        date: '2024-09-18',
        time: '17:00',
        guests: 2,
        occasion: 'Birthday',
      });
    });
  });

  // New tests for HTML validation attributes
  test('date input has required attribute', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={[]} updateAvailableTimes={() => {}} submitForm={() => {}} />
      </MemoryRouter>
    );
    
    const dateInput = screen.getByLabelText(/select date/i);
    expect(dateInput).toHaveAttribute('required');
  });

  test('time select has required attribute', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={[]} updateAvailableTimes={() => {}} submitForm={() => {}} />
      </MemoryRouter>
    );
    
    const timeSelect = screen.getByLabelText(/select time/i);
    expect(timeSelect).toHaveAttribute('required');
  });

  test('guests input has min and max attributes', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={[]} updateAvailableTimes={() => {}} submitForm={() => {}} />
      </MemoryRouter>
    );
    
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10'); // Adjust based on your validation logic
  });

  test('occasion input has required attribute', () => {
    render(
      <MemoryRouter>
        <BookingForm availableTimes={[]} updateAvailableTimes={() => {}} submitForm={() => {}} />
      </MemoryRouter>
    );
  
    const occasionInput = screen.getByLabelText(/occasion/i);
    expect(occasionInput).toHaveAttribute("required");
  });
});