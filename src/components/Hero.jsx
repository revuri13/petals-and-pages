import {
  FiBookOpen,
  FiCoffee,
} from "react-icons/fi";
import { PiFlowerTulip } from "react-icons/pi";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-eyebrow">
            SLOWER DAYS. BRIGHTER STORIES.
          </p>

          <h1>
            Books, Coffee
            <br />
            and Blooms
          </h1>

          <p className="hero-tagline">
            A cozier kind of escape.
          </p>

          <p className="hero-description">
            Discover thoughtful stories, comforting coffee
            and fresh flowers made for slower, brighter days.
          </p>

          <div className="hero-buttons">
            <a href="#books" className="hero-button primary">
              Explore Our World
              <span aria-hidden="true">→</span>
            </a>

            <a href="#story" className="hero-button secondary">
              Our Story
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <FiBookOpen aria-hidden="true" />
              <span>
                Curated Books
                <small>for every mood</small>
              </span>
            </div>

            <div className="hero-feature">
              <FiCoffee aria-hidden="true" />
              <span>
                Artisan Coffee
                <small>&amp; Treats</small>
              </span>
            </div>

            <div className="hero-feature">
              <PiFlowerTulip aria-hidden="true" />
              <span>
                Fresh Flowers
                <small>for brighter days</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;