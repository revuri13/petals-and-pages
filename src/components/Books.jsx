import { useState } from "react";
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { books } from "../data/books";
import Reveal from "./Reveal";

function Books({
  addToCart,
  favorites,
  toggleFavorite,
}) {
  const [showAllBooks, setShowAllBooks] = useState(false);

  const visibleBooks = showAllBooks
    ? books
    : books.slice(0, 4);

  const isFavorite = (bookId) => {
    return favorites.some(
      (favorite) => favorite.id === bookId
    );
  };

  const toggleBooks = () => {
  if (showAllBooks) {
    setShowAllBooks(false);

    setTimeout(() => {
      document
        .getElementById("books")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 50);
  } else {
    setShowAllBooks(true);
  }
};

  return (
    <section className="books-section" id="books">
      <div className="books-container">
        <Reveal>
          <div className="section-heading">
            <p>HANDPICKED FOR SLOWER DAYS</p>
            <h2>Featured Books</h2>
            <span>
              Stories to get lost in, learn from, and keep close.
            </span>
          </div>
        </Reveal>

        <div className="books-grid">
          {visibleBooks.map((book, index) => (
            <Reveal
              key={book.id}
              delay={(index % 4) * 100}
            >
              <article className="book-card">
                <div className="book-image">
                  <img
                    src={book.image}
                    alt={`Cover of ${book.title}`}
                  />

                  <button
                    type="button"
                    className={`favorite-button ${
                      isFavorite(book.id)
                        ? "favorite-active"
                        : ""
                    }`}
                    aria-label={
                      isFavorite(book.id)
                        ? `Remove ${book.title} from favorites`
                        : `Add ${book.title} to favorites`
                    }
                    aria-pressed={isFavorite(book.id)}
                    onClick={() => toggleFavorite(book)}
                  >
                    <FiHeart />
                  </button>
                </div>

                <div className="book-info">
                  <p className="book-author">
                    {book.author}
                  </p>

                  <h3>{book.title}</h3>

                  <div className="book-bottom">
                    <span className="book-price">
                      ${book.price.toFixed(2)}
                    </span>

                    <button
                      type="button"
                      className="book-cart-button"
                      onClick={() => addToCart(book)}
                    >
                      <FiShoppingBag />
                      Add to Bag
                    </button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <button
            type="button"
            className="view-books-link"
            onClick={toggleBooks}
            aria-expanded={showAllBooks}
          >
            {showAllBooks
              ? "Show Less"
              : "View All Books"}

            <span aria-hidden="true">
              {showAllBooks ? "↑" : "→"}
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default Books;