import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/Highlights";
import Features from "../components/Featured";
import CheapestBooks from "../components/DiscountedBooks";
import Explore from "../components/Explore";

function Home() {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
}

export default Home;
