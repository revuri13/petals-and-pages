import { useEffect, useState } from "react";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from "react-icons/fi";

function Navbar({
  cartCount,
  favoriteCount,
  onCartClick,
  onFavoritesClick,
  onAccountClick,
  onSearchClick,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleMobileAction = (action) => {
    setMenuOpen(false);
    action();
  };

  return (
    <header
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-container">
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
        >
          <div
            className="brand-mark"
            aria-hidden="true"
          >
            ❧
          </div>

          <div className="brand-text">
            <span>Petals &amp; Pages</span>
            <small>
              BOOKS • COFFEE • FLOWERS
            </small>
          </div>
        </a>

        <nav
          className={`nav-links ${
            menuOpen ? "nav-open" : ""
          }`}
          aria-label="Main navigation"
        >
          <div className="mobile-nav-links">
            <a href="#home" onClick={closeMenu}>
              Home
            </a>

            <a href="#books" onClick={closeMenu}>
              Books
            </a>

            <a href="#cafe" onClick={closeMenu}>
              Café
            </a>

            <a href="#flowers" onClick={closeMenu}>
              Flowers
            </a>

            <a href="#story" onClick={closeMenu}>
              Our Story
            </a>

            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </div>

          <div className="mobile-nav-actions">
            <button
              type="button"
              onClick={() =>
                handleMobileAction(onSearchClick)
              }
            >
              <FiSearch />
              <span>Search</span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleMobileAction(
                  onFavoritesClick
                )
              }
            >
              <FiHeart />
              <span>Favorites</span>

              {favoriteCount > 0 && (
                <strong>
                  {favoriteCount}
                </strong>
              )}
            </button>

            <button
              type="button"
              onClick={() =>
                handleMobileAction(onAccountClick)
              }
            >
              <FiUser />
              <span>Account</span>
            </button>

            <button
              type="button"
              onClick={() =>
                handleMobileAction(onCartClick)
              }
            >
              <FiShoppingBag />
              <span>Shopping Bag</span>

              {cartCount > 0 && (
                <strong>{cartCount}</strong>
              )}
            </button>
          </div>
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            aria-label="Search"
            onClick={onSearchClick}
          >
            <FiSearch />
          </button>

          <button
            type="button"
            aria-label={`Favorites with ${favoriteCount} saved books`}
            onClick={onFavoritesClick}
          >
            <FiHeart />

            {favoriteCount > 0 && (
              <span className="favorite-count">
                {favoriteCount}
              </span>
            )}
          </button>

          <button
            type="button"
            aria-label="Account"
            onClick={onAccountClick}
          >
            <FiUser />
          </button>

          <button
            type="button"
            aria-label={`Shopping bag with ${cartCount} items`}
            onClick={onCartClick}
          >
            <FiShoppingBag />

            <span className="cart-count">
              {cartCount}
            </span>
          </button>

          <button
            type="button"
            className="menu-toggle"
            aria-label={
              menuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={menuOpen}
            onClick={() =>
              setMenuOpen((current) => !current)
            }
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;