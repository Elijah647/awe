import React from "react";
import stars from "./assets/stars.jpg";
import Maria from "./assets/maria.jpg";
import Wayne from "./assets/wayne.jpg";
import Stacy from "./assets/Stacy.jpg";
import Ale from "./assets/ale.jpg";

const Review = () => {
  return (
    <>
      <h2>Reviews</h2>
      <section className="review-section">
        <div className="card">
          <img src={stars} className="row1 bor stars" alt="5 stars"></img>
          <img src={Wayne} className="row2 bor rev-img" alt="img"></img>
          <p className="row3 bor">Wayne</p>
          <p className="row4 bor">
            "The food at Little Lemon is absolutely divine,
            bursting with fresh flavors and authentic spices. The warm, inviting
            atmosphere makes every visit feel like a special occasion."
          </p>
        </div>
        <div className="card">
          <img src={stars} className="row1 bor stars" alt="5 stars"></img>
          <img src={Stacy} className="row2 bor rev-img" alt="img"></img>
          <p className="row3 bor">Stacy</p>
          <p className="row4 bor">
            "From the moment I walked in, the aroma of grilled meats and herbs
            had me hooked! The portions are generous, and every dish is a
            delicious adventure in Mediterranean flavors."
          </p>
        </div>
        <div className="card">
          <img src={stars} className="row1 bor stars" alt="5 stars"></img>
          <img src={Ale} className="row2 bor rev-img" alt="img"></img>
          <p className="row3 bor">Alejandro</p>
          <p className="row4 bor">
            "I can’t get enough of the perfectly cooked kebabs and the rich,
            creamy hummus—truly the best Mediterranean cuisine I’ve ever had.
            The staff is incredibly friendly and the service is always
            top-notch."
          </p>
        </div>
        <div className="card">
          <img src={stars} className="row1 bor stars" alt="5 stars"></img>
          <img src={Maria} className="row2 bor rev-img" alt="img"></img>
          <p className="row3 bor">Maria</p>
          <p className="row4 bor">
            "Little Lemon serves exquisite Mediterranean dishes that delight the
            palate with every bite. The charming ambiance and friendly staff
            make dining here a true pleasure."
          </p>
        </div>
      </section>
    </>
  );
};

export default Review;
