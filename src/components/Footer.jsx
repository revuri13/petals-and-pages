import {
  FiInstagram,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="footer-brand">
            <span className="footer-brand-mark" aria-hidden="true">
              ❧
            </span>

            <div>
              <strong>Petals &amp; Pages</strong>
              <small>BOOKS • COFFEE • FLOWERS</small>
            </div>
          </a>

          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#books">Books</a>
            <a href="#cafe">Café</a>
            <a href="#flowers">Flowers</a>
            <a href="#story">Our Story</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-social">
            <a
              href="#contact"
              aria-label="Petals and Pages Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="#home"
              className="back-to-top"
              aria-label="Back to top"
            >
              <FiArrowUp />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Petals &amp; Pages. Portfolio concept.
          </p>

          <p>
            Made with <FiHeart aria-hidden="true" /> for slower days.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;