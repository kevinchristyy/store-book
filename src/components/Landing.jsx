import React from "react";
import BookStack from "../assets/book-stack-library-room.png";

function Landing() {
  return (
    <section id="landing">
      <header className="header__bgn">
        <div className="header__container">
          <div className="header__description">
            <h1 className="header__title">
              Norway's most selling online library platform
            </h1>
            <h2 className="landing__subtitle">
              Find the book you need with <span className="gold">READBLE</span>
            </h2>
            <a href="#features">
              <button className="btn">Find books</button>
            </a>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Landing;
