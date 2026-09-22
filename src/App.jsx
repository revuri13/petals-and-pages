import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Books from "./components/Books";
import Cafe from "./components/Cafe";
import Flowers from "./components/Flowers";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import FavoritesDrawer from "./components/FavoritesDrawer";
import AccountDrawer from "./components/AccountDrawer";
import SearchDrawer from "./components/SearchDrawer";
import Toast from "./components/Toast";

function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [favorites, setFavorites] = useState([]);
  const [favoritesOpen, setFavoritesOpen] = useState(false);

  const [accountOpen, setAccountOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const [toast, setToast] = useState({
    message: "",
    show: false,
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({
      message,
      show: true,
      type,
    });

    setTimeout(() => {
      setToast((currentToast) => ({
        ...currentToast,
        show: false,
      }));
    }, 2500);
  };

  const addToCart = (item, category) => {
    showToast(
      `${item.title || item.name} added to your bag`,
      "success"
    );

    const cartId = `${category}-${item.id}`;

    setCart((currentCart) => {
      const existingItem = currentCart.find(
        (cartItem) => cartItem.cartId === cartId
      );

      if (existingItem) {
        return currentCart.map((cartItem) =>
          cartItem.cartId === cartId
            ? {
                ...cartItem,
                quantity: cartItem.quantity + 1,
              }
            : cartItem
        );
      }

      return [
        ...currentCart,
        {
          ...item,
          cartId,
          category,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.cartId === cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (cartId) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.cartId === cartId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (cartId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.cartId !== cartId
      )
    );
  };

  const toggleFavorite = (book) => {
    const alreadyFavorite = favorites.some(
      (favorite) => favorite.id === book.id
    );

    if (alreadyFavorite) {
      showToast(
        `${book.title} removed from favorites`,
        "favorite"
      );
    } else {
      showToast(
        `${book.title} added to favorites`,
        "favorite"
      );
    }

    setFavorites((currentFavorites) => {
      if (alreadyFavorite) {
        return currentFavorites.filter(
          (favorite) => favorite.id !== book.id
        );
      }

      return [...currentFavorites, book];
    });
  };

  const cartCount = cart.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const openCart = () => {
    setFavoritesOpen(false);
    setAccountOpen(false);
    setSearchOpen(false);
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const openFavorites = () => {
    setCartOpen(false);
    setAccountOpen(false);
    setSearchOpen(false);
    setFavoritesOpen(true);
  };

  const closeFavorites = () => {
    setFavoritesOpen(false);
  };

  const openAccount = () => {
    setCartOpen(false);
    setFavoritesOpen(false);
    setSearchOpen(false);
    setAccountOpen(true);
  };

  const closeAccount = () => {
    setAccountOpen(false);
  };

  const openSearch = () => {
    setCartOpen(false);
    setFavoritesOpen(false);
    setAccountOpen(false);
    setSearchOpen(true);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        favoriteCount={favorites.length}
        onCartClick={openCart}
        onFavoritesClick={openFavorites}
        onAccountClick={openAccount}
        onSearchClick={openSearch}
      />

      <main>
        <Hero />

        <Books
          addToCart={(book) =>
            addToCart(book, "book")
          }
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />

        <Cafe
          addToCart={(item) =>
            addToCart(item, "cafe")
          }
        />

        <Flowers
          addToCart={(flower) =>
            addToCart(flower, "flower")
          }
        />

        <Story />
        <Contact />
      </main>

      <Footer />

      <CartDrawer
        isOpen={cartOpen}
        onClose={closeCart}
        cart={cart}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onRemove={removeFromCart}
        onCheckout={() =>
          showToast(
            "Checkout is a demo feature",
            "info"
          )
        }
      />

      <FavoritesDrawer
        isOpen={favoritesOpen}
        onClose={closeFavorites}
        favorites={favorites}
        onRemove={toggleFavorite}
        onAddToCart={(book) =>
          addToCart(book, "book")
        }
      />

      <AccountDrawer
        isOpen={accountOpen}
        onClose={closeAccount}
      />

      <SearchDrawer
        isOpen={searchOpen}
        onClose={closeSearch}
        onAddToCart={addToCart}
      />

      <Toast
        message={toast.message}
        show={toast.show}
        type={toast.type}
      />
    </>
  );
}

export default App;