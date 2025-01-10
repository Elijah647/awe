import React from "react";
import M1 from "./assets/M&A1.jpg";
import M2 from "./assets/M&A2.jpg";


const About = () => {
  return (
    <>
      <h2>About Us</h2>
      <section className="about-section">
        <div className="txt-col">
          <h1 className="head">Little Lemon</h1>
          <h3 className="subhead">Toronto</h3>
          <p className="about-txt">
          Welcome to Little Lemon, where friendship and a passion
            for food come together! Meet Alex and Sam, two lifelong friends who
            grew up in a vibrant neighborhood filled with the aromas of
            Mediterranean cuisine. From their childhood adventures in the
            kitchen, experimenting with spices and flavors, to countless family
            gatherings centered around delicious meals, their love for food has
            only deepened over the years. Driven by their shared dream, they
            decided to open a Mediterranean restaurant that celebrates the rich,
            diverse flavors of the region. At Mediterranean Delights, every dish
            tells a story—whether it’s a savory shawarma, a freh tabbouleh, or
            a rich baklava, each recipe reflects the heritage and traditions
            they cherish. Join us for a meal that’s not just about food, but
            about friendship, culture, and community. We can’t wait to share our
            passion with you!
          </p>
        </div>
        <div className="image-container">
          <div className="image owner1">
            <img src={M1} alt="Owner 1" className="about-img" />
          </div>
          <div className="image owner2">
            <img src={M2} alt="Owner 2" className="about-img" />
          </div>
        </div>{" "}
      </section>
    </>
  );
};

export default About;
