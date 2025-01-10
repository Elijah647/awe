import React, { useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";
import { fetchAPI, store, submitApi } from "./localStorageAPI"; // Import submitApi
import { useNavigate } from "react-router-dom"; // Import useNavigate

const fetchAvailableTimes = async (date) => {
  try {
    const times = await fetchAPI(date);
    return times;
  } catch (error) {
    console.error("Error fetching available times:", error);
    return [];
  }
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case "INITIALIZE_TIMES":
      return action.payload;
    case "UPDATE_TIMES":
      return action.payload;
    default:
      return state;
  }
};

const Booking = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, []);
  const navigate = useNavigate();

  useEffect(() => {
    store();

    const initializeAvailableTimes = async () => {
      const today = new Date().toISOString().split("T")[0];
      const initialTimes = await fetchAvailableTimes(today);
      dispatch({ type: "INITIALIZE_TIMES", payload: initialTimes });
    };

    initializeAvailableTimes();
  }, []);

  const updateAvailableTimes = async (date) => {
    const times = await fetchAvailableTimes(date);
    dispatch({ type: "UPDATE_TIMES", payload: times });
  };

  const submitForm = async (formData) => {
    const success = await submitApi(formData);
    if (success) {
      localStorage.setItem("bookingData", JSON.stringify(formData)); // Store data in localStorage
      navigate("/ConfirmedBooking");
    }
  };

  return (
    <>
      <h2>Booking</h2>
      <section className="booking-section">
        <BookingForm
          availableTimes={availableTimes}
          updateAvailableTimes={updateAvailableTimes} // Pass the function
          submitForm={submitForm}
        />
      </section>
    </>
  );
};

export default Booking;