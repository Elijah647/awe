import React from "react";
import lemonDes from "./assets/lemonDes.jpg";
import salad from "./assets/greekSalad.png";
import bread from "./assets/bread.png";
import hm from "./assets/hm.jpg";
import bak from "./assets/bak.jpg";
import chicks from "./assets/chicks.jpg";
import go from "./assets/go.jpg";
import mous from "./assets/mous.jpg";
import tab from "./assets/tab.jpg";

const Menu = () => {
  return (
    <>
      <h2>Menu</h2>

      <section className="menu-section">
        <div className="menu-item bor ">
          <img src={lemonDes} alt="Lemon Cake Dessert" className="menu-img" />
          <h3>Lemon Cake</h3>
          <p>
            Mediterranean cuisine is known for its fresh, vibrant flavors,
            featuring ingredients like olive oil, fresh herbs, vegetables, and
            seafood. It combines the culinary traditions of countries along the
            Mediterranean Sea, including Greece, Italy, and Turkey. With its
            emphasis on wholesome, simple ingredients, it's both delicious and
            healthy.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={salad} alt="Greek Salad" className="menu-img" />
          <h3>Greek Salad</h3>
          <p>
            Mediterranean cuisine is known for its fresh, vibrant flavors,
            featuring ingredients like olive oil, fresh herbs, vegetables, and
            seafood. It combines the culinary traditions of countries along the
            Mediterranean Sea, including Greece, Italy, and Turkey. With its
            emphasis on wholesome, simple ingredients, it's both delicious and
            healthy.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={bread} alt="Description" className="menu-img" />
          <h3>Bruschetta</h3>
          <p>
            Mediterranean cuisine is known for its fresh, vibrant flavors,
            featuring ingredients like olive oil, fresh herbs, vegetables, and
            seafood. It combines the culinary traditions of countries along the
            Mediterranean Sea, including Greece, Italy, and Turkey. With its
            emphasis on wholesome, simple ingredients, it's both delicious and
            healthy.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={hm} alt="Description" className="menu-img" />
          <h3>Hummus Platter</h3>
          <p>
            A creamy blend of chickpeas, tahini, garlic, and lemon juice, served
            with warm pita bread and a drizzle of olive oil. Accompanied by
            fresh vegetables, this dish is perfect for sharing and bursting with
            flavor.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={chicks} alt="Description" className="menu-img" />
          <h3>Chicken Shawarma</h3>
          <p>
            Tender marinated chicken, seasoned with a blend of Middle Eastern
            spices, roasted to perfection and served in a warm pita or over a
            bed of rice. Topped with garlic sauce, pickles, and fresh
            vegetables, it’s a hearty and satisfying meal.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={mous} alt="Description" className="menu-img" />
          <h3>Moussaka</h3>
          <p>
            A traditional Greek casserole featuring layers of eggplant, ground
            beef, and creamy béchamel sauce, baked until golden brown. This
            comforting dish is rich in flavor and perfect for a cozy dining
            experience.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={tab} alt="Description" className="menu-img" />
          <h3>Tabbouleh</h3>
          <p>
            A refreshing salad made with finely chopped parsley, mint, tomatoes,
            and bulgur wheat, tossed in a zesty lemon-olive oil dressing. Light
            and nutritious, this dish is a celebration of fresh ingredients and
            Mediterranean tradition.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={go} alt="Description" className="menu-img" />
          <h3>Grilled Octopus</h3>
          <p>
            Marinated octopus, grilled to perfection and served over a bed of
            arugula with a drizzle of lemon and olive oil. Tender and flavorful,
            this dish captures the essence of coastal Mediterranean cuisine.
          </p>
        </div>
        <div className="menu-item bor">
          <img src={bak} alt="Description" className="menu-img" />
          <h3>Baklava</h3>
          <p>
            A decadent dessert made from layers of flaky phyllo pastry filled
            with chopped nuts and sweetened with honey syrup. Each bite is a
            delightful combination of textures and flavors, making it the
            perfect sweet ending to your meal.
          </p>
        </div>
      </section>
    </>
  );
};

export default Menu;
