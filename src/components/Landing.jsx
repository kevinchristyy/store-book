import React from "react";
import BookShelf from "../assets/undraw_book.svg";

function Landing() {
  return (
    <section id="landing">
      <header className="header__bgn">
        <div className="header__container">
          <div className="header__description">
            <h1>Norway's most selling online library platform</h1>
            <h2 className="landing__subtitle">
              Find the book you need with <span className="gold">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Find books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={BookShelf} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
