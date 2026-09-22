import { FiBookOpen, FiCoffee } from "react-icons/fi";
import { PiFlowerTulip } from "react-icons/pi";
import Reveal from "./Reveal";

function Story() {
  return (
    <section className="story-section" id="story">
      <div className="story-container">
        <Reveal>
          <div className="story-image">
            <img
              src="/images/our-story.jpg"
              alt="Cozy Petals and Pages bookstore cafe with books, coffee and flowers"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="story-content">
            <p className="story-eyebrow">OUR STORY</p>

            <h2>
              A little place for
              <br />
              slower moments.
            </h2>

            <p className="story-lead">
              Petals &amp; Pages was imagined as a cozy escape from the rush
              of everyday life.
            </p>

            <p className="story-text">
              A place where you can discover a new story, linger over a warm
              cup of coffee, and take home a small bundle of flowers. Everything
              here is inspired by the simple things that make an ordinary day
              feel a little brighter.
            </p>

            <div className="story-values">
              <div>
                <FiBookOpen aria-hidden="true" />
                <span>Thoughtful stories</span>
              </div>

              <div>
                <FiCoffee aria-hidden="true" />
                <span>Comforting coffee</span>
              </div>

              <div>
                <PiFlowerTulip aria-hidden="true" />
                <span>Fresh blooms</span>
              </div>
            </div>

            <a href="#contact" className="story-link">
              Come Visit Us
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Story;