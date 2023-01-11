import React from "react";
import { Link } from "react-router-dom";
import Price from "./Price";
import Ratings from "./Ratings";

function Book({ book }) {
  return (
    <div className="book">
      <Link to={`/books/${book.id}`}>
        <figure>
          <img src={book.url} alt="" className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Ratings rating={book.rating} />
      <Price salePrice={book.salePrice} originalPrice={book.originalPrice} />
    </div>
  );
}

export default Book;
