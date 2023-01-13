import React from "react";
import Book from "./ui/Book";
import { books } from "../data";

function DiscountedBooks() {
  return (
    <section id="recent">
      <div className="discounted__container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="gold">Books</span>
          </h2>
          <div className="books">
            {books
              .slice()
              .filter((book) => book.salePrice > 0)
              .slice(0, 8)
              .map((book) => (
                <Book book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default DiscountedBooks;
