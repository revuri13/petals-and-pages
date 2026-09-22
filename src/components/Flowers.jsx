import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";
import { flowers } from "../data/flowers";
import Reveal from "./Reveal";

function Flowers({ addToCart }) {
  const [showAllFlowers, setShowAllFlowers] = useState(false);

  const visibleFlowers = showAllFlowers
    ? flowers
    : flowers.slice(0, 3);

  const toggleFlowers = () => {
    if (showAllFlowers) {
      setShowAllFlowers(false);

      setTimeout(() => {
        document
          .getElementById("flowers")
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      }, 50);
    } else {
      setShowAllFlowers(true);
    }
  };

  return (
    <section className="flowers-section" id="flowers">
      <div className="flowers-container">
        <Reveal>
          <div className="flowers-heading">
            <p>FRESHLY GATHERED</p>
            <h2>Fresh Flowers</h2>
            <span>
              Little bouquets made to bring something beautiful
              into your day.
            </span>
          </div>
        </Reveal>

        <div className="flowers-grid">
          {visibleFlowers.map((flower, index) => (
            <Reveal
              key={flower.id}
              delay={(index % 3) * 140}
              animation="bloom"
            >
              <article className="flower-card">
                <div className="flower-image">
                  <img
                    src={flower.image}
                    alt={`${flower.name} flower bouquet`}
                  />
                </div>

                <div className="flower-info">
                  <div className="flower-title">
                    <h3>{flower.name}</h3>

                    <span>
                      ${flower.price.toFixed(2)}
                    </span>
                  </div>

                  <p>{flower.description}</p>

                  <button
                    type="button"
                    className="flower-cart-button"
                    onClick={() => addToCart(flower)}
                  >
                    <FiShoppingBag />
                    Add to Bag
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <button
            type="button"
            className="view-flowers-link"
            onClick={toggleFlowers}
            aria-expanded={showAllFlowers}
          >
            {showAllFlowers
              ? "Show Less"
              : "Explore All Flowers"}

            <span aria-hidden="true">
              {showAllFlowers ? "↑" : "→"}
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Flowers;