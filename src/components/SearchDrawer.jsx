import { useState } from "react";
import {
  FiSearch,
  FiX,
  FiShoppingBag,
  FiBookOpen,
  FiCoffee,
} from "react-icons/fi";
import { PiFlowerTulip } from "react-icons/pi";

import { books } from "../data/books";
import { cafeItems } from "../data/cafe";
import { flowers } from "../data/flowers";

function SearchDrawer({ isOpen, onClose, onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const allItems = [
    ...books.map((book) => ({
      ...book,
      category: "Book",
      displayName: book.title,
      searchText: `${book.title} ${book.author}`,
    })),

    ...cafeItems.map((item) => ({
      ...item,
      category: "Café",
      displayName: item.name,
      searchText: `${item.name} ${item.description}`,
    })),

    ...flowers.map((flower) => ({
      ...flower,
      category: "Flower",
      displayName: flower.name,
      searchText: `${flower.name} ${flower.description}`,
    })),
  ];

  const filteredItems =
    searchTerm.trim() === ""
      ? []
      : allItems.filter((item) =>
          item.searchText
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

  const handleClose = () => {
    setSearchTerm("");
    onClose();
  };

  const getCategoryIcon = (category) => {
    if (category === "Book") {
      return <FiBookOpen />;
    }

    if (category === "Café") {
      return <FiCoffee />;
    }

    return <PiFlowerTulip />;
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          className="search-overlay"
          onClick={handleClose}
          aria-label="Close search"
        />
      )}

      <aside
        className={`search-drawer ${
          isOpen ? "search-drawer-open" : ""
        }`}
        aria-label="Search Petals and Pages"
      >
        <div className="search-header">
          <div>
            <p>FIND SOMETHING LOVELY</p>
            <h2>Search</h2>
          </div>

          <button
            type="button"
            className="search-close"
            onClick={handleClose}
            aria-label="Close search"
          >
            <FiX />
          </button>
        </div>

        <div className="search-content">
          <div className="search-input-wrapper">
            <FiSearch aria-hidden="true" />

            <input
              type="search"
              value={searchTerm}
              onChange={(event) =>
                setSearchTerm(event.target.value)
              }
              placeholder="Search books, coffee or flowers..."
              aria-label="Search products"
            />
          </div>

          {searchTerm.trim() === "" ? (
            <div className="search-empty">
              <FiSearch />

              <h3>What are you looking for?</h3>

              <p>
                Search our books, café favorites and fresh
                flower collections.
              </p>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="search-empty">
              <FiSearch />

              <h3>No matches found.</h3>

              <p>
                Try another title, author, drink or bouquet.
              </p>
            </div>
          ) : (
            <div className="search-results">
              <p className="search-result-count">
                {filteredItems.length}{" "}
                {filteredItems.length === 1
                  ? "result"
                  : "results"}
              </p>

              {filteredItems.map((item) => (
                <article
                  className="search-result"
                  key={`${item.category}-${item.id}`}
                >
                  <img
                    src={item.image}
                    alt={item.displayName}
                  />

                  <div className="search-result-info">
                    <div className="search-category">
                      {getCategoryIcon(item.category)}
                      <span>{item.category}</span>
                    </div>

                    <h3>{item.displayName}</h3>

                    {item.author && (
                      <p className="search-author">
                        {item.author}
                      </p>
                    )}

                    <div className="search-result-bottom">
                      <strong>
                        ${item.price.toFixed(2)}
                      </strong>

                      <button
  type="button"
  onClick={() => {
    const categoryMap = {
      Book: "book",
      Café: "cafe",
      Flower: "flower",
    };

    onAddToCart(item, categoryMap[item.category]);
  }}
>
                        <FiShoppingBag />
                        Add
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

export default SearchDrawer;