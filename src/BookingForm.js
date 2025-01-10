import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookingForm = ({ availableTimes, updateAvailableTimes, submitForm }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      time: "",
      guests: 1,
      occasion: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      date: Yup.date().required("Required").nullable(),
      time: Yup.string().required("Required"),
      guests: Yup.number()
        .min(1, "Must be at least 1 guest")
        .max(10, "Cannot reserve for more than 10 guests")
        .required("Required"),
      occasion: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      submitForm(values);
    },
  });

  return (
    <form className="booking-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="name"
        {...formik.getFieldProps("name")}
        required // Add required attribute here
        placeholder="Enter your name"
        onChange={(e) => {
          formik.setFieldValue("name", e.target.value);
          updateAvailableTimes(e.target.value);
        }}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className="error">{formik.errors.name}</div>
      ) : null}
      <label htmlFor="date">Select Date:</label>
      <input
        id="date"
        type="date"
        {...formik.getFieldProps("date")}
        required // Add required attribute here
        onChange={(e) => {
          formik.setFieldValue("date", e.target.value);
          updateAvailableTimes(e.target.value);
        }}
      />
      {formik.touched.date && formik.errors.date ? (
        <div className="error">{formik.errors.date}</div>
      ) : null}

      <label htmlFor="time">Select Time:</label>
      <select
        id="time"
        {...formik.getFieldProps("time")}
        required // Add required attribute here
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>
      {formik.touched.time && formik.errors.time ? (
        <div className="error">{formik.errors.time}</div>
      ) : null}

      <label htmlFor="guests">Number of Guests:</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        {...formik.getFieldProps("guests")}
        required // Add required attribute here
      />
      {formik.touched.guests && formik.errors.guests ? (
        <div className="error">{formik.errors.guests}</div>
      ) : null}

      <label htmlFor="occasion">Occasion:</label>
      <select id="occasion" {...formik.getFieldProps("occasion")} required>
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Business Meeting">Business Meeting</option>
        <option value="Other">Other</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className="error">{formik.errors.occasion}</div>
      ) : null}

      <button
        className="submit-btn"
        type="submit" // Ensure this is present
        disabled={!formik.isValid || !formik.dirty}
      >
        Submit
      </button>
    </form>
  );
};

export default BookingForm;
