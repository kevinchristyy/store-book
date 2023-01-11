import React from "react";
import BookStack from "../assets/book-stack-library-room.png";

function Landing() {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Norway's most selling online library platform</h1>
            <h2>
              Find the book you need with{" "}
              <span className="purple">Library</span>
            </h2>
            <a href="#features">
              <button className="btn">Find books</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={BookStack} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing;
