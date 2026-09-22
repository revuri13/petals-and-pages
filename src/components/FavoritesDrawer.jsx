import {
  FiX,
  FiHeart,
  FiShoppingBag,
  FiTrash2,
} from "react-icons/fi";

function FavoritesDrawer({
  isOpen,
  onClose,
  favorites,
  onRemove,
  onAddToCart,
}) {
  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="favorites-overlay"
          onClick={onClose}
          aria-label="Close favorites"
        />
      )}

      <aside
        className={`favorites-drawer ${
          isOpen ? "favorites-drawer-open" : ""
        }`}
        aria-label="Favorite books"
      >
        <div className="favorites-header">
          <div>
            <p>SAVED FOR LATER</p>
            <h2>Favorite Books</h2>
          </div>

          <button
            type="button"
            className="favorites-close"
            onClick={onClose}
            aria-label="Close favorites"
          >
            <FiX />
          </button>
        </div>

        <div className="favorites-content">
          {favorites.length === 0 ? (
            <div className="empty-favorites">
              <FiHeart />

              <h3>No favorites yet.</h3>

              <p>
                Save the books that catch your eye and
                they'll appear here.
              </p>

              <button
                type="button"
                onClick={onClose}
              >
                Explore Books
              </button>
            </div>
          ) : (
            <div className="favorite-items">
              {favorites.map((book) => (
                <article
                  className="favorite-item"
                  key={book.id}
                >
                  <img
                    src={book.image}
                    alt={`Cover of ${book.title}`}
                  />

                  <div className="favorite-item-info">
                    <p className="favorite-author">
                      {book.author}
                    </p>

                    <h3>{book.title}</h3>

                    <p className="favorite-price">
                      ${book.price.toFixed(2)}
                    </p>

                    <div className="favorite-actions">
                      <button
                        type="button"
                        className="favorite-add-cart"
                        onClick={() => onAddToCart(book)}
                      >
                        <FiShoppingBag />
                        Add to Bag
                      </button>

                      <button
                        type="button"
                        className="favorite-remove"
                        onClick={() => onRemove(book)}
                        aria-label={`Remove ${book.title} from favorites`}
                      >
                        <FiTrash2 />
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

export default FavoritesDrawer;