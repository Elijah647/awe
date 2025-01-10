import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Main from "./Main";
import About from "./about";
import Menu from "./Menu";
import Booking from "./Booking";
import ConfirmedBooking from './ConfirmedBooking';
import "./styles.css";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/ConfirmedBooking" element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;