import React from "react";
import lemonDes from "./assets/lemonDes.jpg";
import salad from "./assets/greekSalad.png";
import bread from "./assets/bread.png";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section className="highlight-section">
        <div className="col1">This weeks Specials!</div>
        <div className="col1">
          <button className="om-btn">
            <Link to="/Menu">Online Menu</Link>
          </button>
        </div>
        <div className="col3">
          <img src={lemonDes} alt="Lemon Cake Dessert" className="spec-img" />
          <h3>Lemon Cake</h3>
          <p>
            A zesty treat that captures the essence of sunshine in every bite.
            This moist, fluffy cake is infused with fresh lemon zest and juice,
            offering a perfect balance of sweet and tart. Topped with a silky
            lemon glaze and a dusting of powdered sugar, it’s the ideal dessert
            to brighten your day.
          </p>
        </div>
        <div className="col4">
          <img src={salad} alt="Greek Salad" className="spec-img" />
          <h3>Greek Salad</h3>
          <p>
            Crisp cucumbers, juicy tomatoes, and crunchy bell peppers are tossed
            with tangy red onions and briny Kalamata olives. Finished with
            creamy feta cheese and drizzled with extra virgin olive oil, this
            colorful dish is seasoned with oregano for an authentic touch.
          </p>
        </div>
        <div className="col5">
          <img src={bread} alt="Description" className="spec-img" />
          <h3>Bruschetta</h3>
          <p>
            Savor the taste of Italy with our classic bruschetta, a delightful
            appetizer that’s perfect for sharing. Each toasted slice of rustic
            bread is topped with a vibrant mixture of ripe tomatoes, fragrant
            basil, and garlic, all drizzled with high-quality olive oil and a
            splash of balsamic vinegar.
          </p>
        </div>
      </section>
    </>
  );
};

export default Menu;
