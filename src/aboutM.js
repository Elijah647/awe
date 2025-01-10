import React from "react";
import m1 from "./assets/M1.jpg";
import m2 from "./assets/M2.jpg";
import { Link } from "react-router-dom";

const aboutM = () => {
  return (
    <>
      <h2>About Us</h2>
      <section className="about-section">
        <div className="txt-col">
          <h1 className="head">Little Lemon</h1>
          <h3 className="subhead">Toronto</h3>
          <p className="about-txt">
            Driven by their shared dream, they decided to open a Mediterranean
            restaurant that celebrates the rich, diverse flavors of the region.
            At Mediterranean Delights, every dish tells a story—whether it’s a
            savory shawarma, a fresh tabbouleh, or a rich baklava, each recipe
            reflects the heritage and traditions they cherish. Join us for a
            meal that’s not just about food, but about friendship, culture, and
            community. We can’t wait to share our passion with you!
          </p>
          <div className="a">
            <button className="about-button">
              <Link to="/about" className="link-text">
                Read More
              </Link>
            </button>
          </div>
        </div>
        <div className="image-container">
          <div className="image owner1">
            <img src={m1} alt="Owner 1" className="about-img" />
          </div>
          <div className="image owner2">
            <img src={m2} alt="Owner 2" className="about-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default aboutM;
