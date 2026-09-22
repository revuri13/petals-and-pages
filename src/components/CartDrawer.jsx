import { useEffect } from "react";
import {
  FiX,
  FiShoppingBag,
  FiTrash2,
} from "react-icons/fi";

function CartDrawer({
  isOpen,
  onClose,
  cart,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="cart-overlay"
          onClick={onClose}
          aria-label="Close shopping bag"
        />
      )}

      <aside
        className={`cart-drawer ${
          isOpen ? "cart-drawer-open" : ""
        }`}
        aria-label="Shopping bag"
      >
        <div className="cart-header">
          <div>
            <p>YOUR SELECTIONS</p>
            <h2>Shopping Bag</h2>
          </div>

          <button
            type="button"
            className="cart-close"
            onClick={onClose}
            aria-label="Close shopping bag"
          >
            <FiX />
          </button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <div className="empty-cart">
              <FiShoppingBag />

              <h3>Your bag is empty.</h3>

              <p>
                Add a book, something from the café,
                or a fresh bouquet.
              </p>

              <button
                type="button"
                onClick={onClose}
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <div className="cart-items">
              {cart.map((item) => (
                <div
                  className="cart-item"
                  key={item.cartId}
                >
                  <img
                    src={item.image}
                    alt={item.title || item.name}
                  />

                  <div className="cart-item-info">
                    <h3>
                      {item.title || item.name}
                    </h3>

                    <p className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="cart-item-actions">
                      <div
                        className="quantity-control"
                        aria-label={`Quantity for ${
                          item.title || item.name
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            onDecrease(item.cartId)
                          }
                          aria-label={`Decrease quantity of ${
                            item.title || item.name
                          }`}
                        >
                          −
                        </button>

                        <span>
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() =>
                            onIncrease(item.cartId)
                          }
                          aria-label={`Increase quantity of ${
                            item.title || item.name
                          }`}
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        className="cart-remove"
                        onClick={() =>
                          onRemove(item.cartId)
                        }
                      >
                        <FiTrash2 />
                        Remove
                      </button>
                    </div>

                    <p className="cart-item-total">
                      Item total:
                      <strong>
                        $
                        {(
                          item.price *
                          item.quantity
                        ).toFixed(2)}
                      </strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-summary">
            <div className="cart-subtotal">
              <span>Subtotal</span>

              <strong>
                ${subtotal.toFixed(2)}
              </strong>
            </div>

            <p>
              Taxes and shipping calculated at
              checkout.
            </p>

            <button
              type="button"
              className="checkout-button"
            >
              Checkout
              <span aria-hidden="true">→</span>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

export default CartDrawer;