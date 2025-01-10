import React from "react";


const ConfirmBooking = () => {
  const bookingData = JSON.parse(localStorage.getItem("bookingData")) || {};

  return (
  <>
 
    <section className="confirm">
    <div className="confirm-booking">
      <h1 className="confirm-title">Booking Confirmed!</h1>
      <p className="confirm-message">Thank you for your reservation. We look forward to seeing you!</p>
      <h2>Your Details:</h2>
      <ul className="booking-details">
        <li><strong>Name:</strong> {bookingData.name}</li>
        <li><strong>Date:</strong> {bookingData.date}</li>
        <li><strong>Time:</strong> {bookingData.time}</li>
        <li><strong>Number of Guests:</strong> {bookingData.guests}</li>
        <li><strong>Occasion:</strong> {bookingData.occasion}</li>
      </ul>
    </div>
    </section>
    </>
  );
};


export default ConfirmBooking;