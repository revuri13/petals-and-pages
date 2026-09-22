import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { cafeItems } from "../data/cafe";
import Reveal from "./Reveal";

function Cafe({ addToCart }) {
  const [showFullMenu, setShowFullMenu] = useState(false);

  const visibleItems = showFullMenu
    ? cafeItems
    : cafeItems.slice(0, 3);

  const toggleMenu = () => {
    if (showFullMenu) {
      setShowFullMenu(false);

      setTimeout(() => {
        document
          .getElementById("cafe")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    } else {
      setShowFullMenu(true);
    }
  };

  return (
    <section className="cafe-section" id="cafe">
      <div className="cafe-container">
        <Reveal>
          <div className="cafe-heading">
            <p>POURED &amp; BAKED WITH CARE</p>
            <h2>Café Favorites</h2>
            <span>
              Warm drinks and little treats made for lingering a while.
            </span>
          </div>
        </Reveal>

        <div className="cafe-grid">
          {visibleItems.map((item, index) => (
            <Reveal
              key={item.id}
              delay={(index % 3) * 120}
            >
              <article className="cafe-card">
                <div className="cafe-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <div className="cafe-info">
                  <div className="cafe-title">
                    <h3>{item.name}</h3>
                    <span>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <p>{item.description}</p>

                  <button
                    type="button"
                    className="cafe-cart-button"
                    onClick={() => addToCart(item)}
                  >
                    <FiShoppingBag />
                    Add to Bag
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={250}>
          <button
            type="button"
            className="view-menu-link"
            onClick={toggleMenu}
            aria-expanded={showFullMenu}
          >
            {showFullMenu
              ? "Show Less"
              : "View Full Menu"}

            <span aria-hidden="true">
              {showFullMenu ? "↑" : "→"}
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Cafe;